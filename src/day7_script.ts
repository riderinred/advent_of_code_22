import * as fs from 'fs';
import * as process from "process";

// BEGIN TYPES
type BasicFile = { fileSize: number, fileName: string };
type BasicDirectory = { dirSize: number, dirName: string };
type IOstructure_element = {
    directory: string,
    data: BasicFile[],
    subdirectories: IOstructure_element[]
}
type IOstructure_object = {
    [key: string]: IOstructure_element
}
type Command = { keyword: string, params: string[] }
// END TYPES

// BEGIN GLOBALS
const input = fs.readFileSync("../inputs/day7.txt", "utf-8");
const test_input = fs.readFileSync("../inputs/day7_test.txt", "utf-8");
// END GLOBALS

function main() {
    const files = parseTo_JSONfileStructure(input);
    const size_all = getSize_allDirectories(files, true);

    let size_dirs_small = 0, count_dirs_small = 0;
    for (let i = 0; i < size_all.length; i++) {
        if (size_all[i].dirSize <= 100_000) {
            size_dirs_small += size_all[i].dirSize;
            count_dirs_small++;
        }
    }
    console.log(`There are ${count_dirs_small} small dirs with a total size of ${size_dirs_small}`);
    let a;
}

// implementation of String.split() from scratch specifically for String.split("\r\n")
function splitRawToArray(input: string): string[] {
    let out: string[] = [];
    let buffer: string = "";
    let lastWasBackslash: boolean = false;
    [...input].map((char) => {
        if (char === "\r") {
            lastWasBackslash = true;
        } else
        if (char === "\n" && lastWasBackslash) {
            out = out.concat(buffer);
            buffer = "";
        } else {
            buffer = buffer.concat(char);
        }
    })
    return out;
}

function parseTo_JSONfileStructure(inputRaw: string) {
    const inputPerLine = inputRaw.split("\r\n");
    let IOstructure: IOstructure_object = {}
    let entryCount_IOstructure = 0;

    let nextOutputInfo: {
        writeOnNextCmd: boolean,
        targetDirectory: string | IOstructure_element
        targetDirectory_stages: string[],
        foundDirectoryIndex?: number
    } = {
        writeOnNextCmd: false,
        targetDirectory: "",
        targetDirectory_stages: []
    }
    let output_buffer: string[] = [];

    //let curr_directory = "";
    for (let i = 0; i < inputPerLine.length; i++) {
        let lineIsCmd: boolean;
        const curr_line = inputPerLine[i];
        curr_line[0] === "$" ? lineIsCmd=true : lineIsCmd=false;

        if (lineIsCmd) {
            const cmd: Command = parseCmd(curr_line);
            if (output_buffer.length > 0 && nextOutputInfo.writeOnNextCmd) {
                addBufferToIOstructure(output_buffer);
                output_buffer = [];
            }
            if (!checkStructureHasDir(nextOutputInfo.targetDirectory as string)) addEmptyDir_toStructure(nextOutputInfo.targetDirectory as string);

            switch (cmd.keyword) {
                case "cd":
                    //nextOutputInfo.directory = curr_line.slice(5);
                    if (cmd.params.includes("..")) {
                        nextOutputInfo.targetDirectory = moveUpDirectory(nextOutputInfo.targetDirectory as string, true)
                    }
                    else {
                        nextOutputInfo.targetDirectory = moveToDirectory(nextOutputInfo.targetDirectory as string, cmd.params[0], true);
                    }
                    break;
                case "ls":
                    nextOutputInfo.writeOnNextCmd = true;
                    break;
            }
        }
        else if (!lineIsCmd) {
            output_buffer.push(curr_line);
            /*
            let temp = curr_line.split(" ");
            if (temp[0].includes("dir")) {
                let subdir: IOstructure_element = {
                    directory: temp[1],
                    data: [],
                    subdirectories: []
                }
                IOstructure[entryCount_IOstructure].subdirectories.push(subdir);
            } else {
                let temp_size = Number(temp[0]);
                let temp_name = temp[1];
                IOstructure[entryCount_IOstructure].data.push({fileSize: temp_size, fileName: temp_name});
            }
             */
        }

        // handle last output at end of file
        if (i === inputPerLine.length-1) {
            addBufferToIOstructure(output_buffer);
        }
    }
    return IOstructure;

    // local functions
    function moveToDirectory(curr_dir:string, dest: string, verbose?: boolean): string {
        if (dest === "." || dest === "..") throw new RangeError("invalid value for dest:  '.' || '..'");
        nextOutputInfo.targetDirectory_stages.push(dest);

        let out: string;
        if (curr_dir === "/" && dest !== "/") {
            out = curr_dir + dest;
        } else if (dest === "/") {
            out = "/";
        } else {
           out = curr_dir + "/" + dest;
        }
        if (verbose) console.log(`Moving down from ${curr_dir} to ${out} at ${Object.entries(IOstructure).length}`);
        return out;
    }
    function moveUpDirectory(curr_dir:string, verbose?: boolean): string {
        if (nextOutputInfo.targetDirectory_stages.length === 0) {
            console.error(nextOutputInfo);
            throw new RangeError("nextOutputInfo.targetDirectory_stages is 0!");
        }
        nextOutputInfo.targetDirectory_stages.pop();

        let all_dirs = curr_dir.split("/");
        let out = "/";
        for (let i = 0; i < all_dirs.length-1; i++) {
            if (out.slice(-1) !== "/") out = out.concat("/");
            out = out.concat(all_dirs[i]);
        }

        let outExists: boolean = checkStructureHasDir(out);
        if (!outExists) throw new Error(`${out} does not exist!`);

        if (verbose) console.log(`Moving up from ${curr_dir} to ${out} at ${Object.entries(IOstructure).length}`);
        return out;
    }
    function addBufferToIOstructure(output_buffer: string[]): void {
        let filesArray: BasicFile[] = [];
        let subdirArray: IOstructure_element[] = [];
        deconstructBuffer(output_buffer);

        //TODO add filesArray and subdirArray to correct element in IOstructure[num].subdirectories[path]
        if (!checkStructureHasDir(nextOutputInfo.targetDirectory as string)) {
            addFilledDir_toStructure(nextOutputInfo.targetDirectory as string, filesArray, subdirArray);
        } else {
            // nextOutputInfo.foundDirectoryIndex set by checkStructureHasDir()
            if (filesArray.length > 0) IOstructure[nextOutputInfo.targetDirectory as string].data.push(...filesArray);
            if (subdirArray.length > 0) IOstructure[nextOutputInfo.targetDirectory as string].subdirectories.push(...subdirArray);
        }

        nextOutputInfo.writeOnNextCmd = false;
        // local functions
        function deconstructBuffer(output_buffer: string[]) {
            output_buffer.map((v,i,a) => {
                let temp = v.split(" ");
                if (v.includes("dir")) {
                    let subdir: IOstructure_element = {
                        directory: temp[1],
                        data: [],
                        subdirectories: []
                    }
                    subdirArray.push(subdir);
                } else {
                    let temp_size = Number(temp[0]);
                    let temp_name = temp[1];
                    filesArray.push({fileSize: temp_size, fileName: temp_name});
                }
            })
        }
    }
    // parse input
    function parseCmd(curr_line: string): Command {
        let out: Command = {keyword: "", params: []};
        if (curr_line.includes("cd")) out.keyword = "cd";
        if (curr_line.includes("ls")) out.keyword = "ls";

        switch (out.keyword) {
            case "cd":
                out.params = curr_line.slice(5).split(" ");
                break;
            case "ls":
                out.params = curr_line.slice(5).split(" ");
                break;
        }

        return out;
    }
    // manipulate data structure
    function addEmptyDir_toStructure(dir: string): void {
        if (dir === "") return;
        addFilledDir_toStructure(dir, [], []);
    }
    function addFilledDir_toStructure(dir: string, filesArray: BasicFile[], subdirArray: IOstructure_element[]): void {
        if (dir === "") return;
        let dirExists: boolean = checkStructureHasDir(dir);
        verifyDirHasSubdir(dir, "addFilledDir_toStructure");
        if (!dirExists) {
            IOstructure[dir] = {
                directory: dir,
                data: filesArray,
                subdirectories: subdirArray
            };
            entryCount_IOstructure++;
        } else {
            throw new Error(`attempted addFilledDirToStructure() for existing dir ${dir}`);
        }
    }
    // check data structure validity
    function verifyDirHasSubdir(dir: string, caller?: string): void {
        if (dir === "/") return;

        let out: boolean = false;
        let subdir: string = dir.split("/").slice(-1)[0];
        let expected_parentDir = build_queried_parentDir(dir);

        Object.entries(IOstructure).forEach((valueO, index) => {
            IOstructure[valueO[0]].subdirectories.forEach((valueI) => {
                if (valueI.directory === subdir) {
                    let actual_parentDir = valueO[1].directory;
                    if (actual_parentDir === expected_parentDir) out = true;
                    //TODO  Did not found subdir for /tchbjclg/bljmjwm/mfpcdbg/trjgzcj/hngr/tpqrqtqj
                    // Moving down from /tchbjclg/bljmjwm/mfpcdbg/trjgzcj/hngr to /tchbjclg/bljmjwm/mfpcdbg/trjgzcj/hngr/tpqrqtqj at 121
                    // there are 3 preceding moves for 121, 4 moves successful at 114
                    // subdir is wrong! Should be /tchbjclg/bljmjwm/mfpcdbg/trjgzcj/hngr/tchbjclg/tpqrqtqj according to data structure


                    //old error: for dir "/tchbjclg/bljmjwm/cqtmhzbf/ztcbmbw/cmwwg" the resulting expected_parentDir is "//bljmjwm/cqtmhzbf/ztcbmbw/cmwwg/tchbjclg"
                }
            })
        })

        if (!out) {
            throw new Error(`Did not found subdir for ${dir}`);
        }
        function build_queried_parentDir(current_dir: string): string {
            // check if subdir is once or multiple times in current_dir
            let all_elements = current_dir.split("/");
            let temp: string = "/";
            for (let i = 0; i < all_elements.length-1; i++) {
                temp += all_elements[i];
                if (i>0 && (all_elements.length-i) > 2) temp += "/";
            }
            if (temp.length>1 && temp[temp.length-1] === "/") temp = temp.slice(0, -1);
            if (temp[0] === "/" && temp[1] === "/") {
                throw new Error(`queried_parentDir starting with // for ${temp}`)
            }
            if (temp === undefined) throw new Error(`output is undefined for input ${current_dir}`);
            return temp;
        }
    }
    function checkStructureHasDir(dir: string): boolean {
        let out: boolean = false;
        Object.entries(IOstructure).forEach((val, ind) => {
            if (val[1].directory === dir) {
                nextOutputInfo.foundDirectoryIndex = ind;
                out = true;
                return out;
            }
        })
        return out;
    }
}

function getDirectorySize_shallow(dir: string, fileStructure: { [key: number]: IOstructure_element }, verbose?: boolean, ignoreSubDirs?:boolean): number {
    // find dir in IOstructure
    let index_firstDepth = "init";
    for (let ind in fileStructure) {
        if (fileStructure[ind].directory === dir) index_firstDepth = ind;
    }
    if (index_firstDepth === "init") throw new Error(`directory ${dir} not found!`);

    let shallow_dirSize = 0;
    for (let i = 0; i < fileStructure[index_firstDepth].data.length; i++) {
        shallow_dirSize += fileStructure[index_firstDepth].data[i].fileSize;
    }
    if (verbose) console.log(`Shallow size of directory ${dir} is ${shallow_dirSize}`);

    if (!ignoreSubDirs) {
        if (fileStructure[index_firstDepth].subdirectories.length > 0) {
            throw new Error("dir has subdirectories, counting deep size not implemented!");
        }
    }

    return shallow_dirSize;
}

function getSize_allDirectories(fileStructure: IOstructure_object, verbose?: boolean): BasicDirectory[] {
    //TODO give baseDirectory as parameter to make func universal
    let dirsToDo: string[] = [];
    let out: BasicDirectory[] = []

    Object.entries(fileStructure).forEach((val, ind) => {
        let currDirectory = val[1].directory;
        if (verbose) console.log(`Starting recursive getDirectorySize for: ${currDirectory}`);
        let currSize = getDirectorySize_deep_recursive(currDirectory, 0);
        out.push({ dirSize: currSize, dirName: currDirectory });
    })
    return out;

    // local functions
    function getDirectorySize_deep_recursive(dir: string, result_param?:number): number {
        if (verbose) console.log(`getDirectorySize working on: ${dir}`);
        let result_local = 0;
        result_local += result_param;

        // find dir in IOstructure
        let directory_index = "init";
        for (let ind in fileStructure) {
            if (fileStructure[ind].directory === dir) directory_index = ind;
        }
        if (directory_index === "init") {
            throw new Error(`directory ${dir} not found!`);
        }

        // process files
        for (let i = 0; i < fileStructure[directory_index].data.length; i++) {
            result_local += fileStructure[directory_index].data[i].fileSize;
        }

        // add subDirs to dirsToDo
        for (let ind in fileStructure[directory_index].subdirectories) {
            let next = dir;
            if (next.slice(-1) !== "/") next = next.concat("/");
            dirsToDo.push(next.concat(fileStructure[directory_index].subdirectories[ind].directory));
        }

        // remove dir from dirsToDo
        for (let i = 0; i < dirsToDo.length; i++) {
            if (dirsToDo[i] === dir) dirsToDo.splice(i, 1);
        }

        // check for recursion
        if (dirsToDo.length > 0) {
            return getDirectorySize_deep_recursive(dirsToDo[0], result_local);
        } else {
            return result_local;
        }
    }
}

main();