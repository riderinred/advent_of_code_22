import * as fs from 'fs';

// TYPES
type BasicFile = { fileSize: number, fileName: string };
type IOstructure_element = {
    directory: string,
    data: BasicFile[],
    subdirectories: IOstructure_element[]
}
type Command = { keyword: string, params: string[] }

// GLOBALS
const input = fs.readFileSync("../inputs/day7.txt", "utf-8");
const test_input = fs.readFileSync("../inputs/day7_test.txt", "utf-8");

const files = parserToJSON_fileStructure(test_input);
let size_d = getDirectorySize("/d", files);
let a;

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

function parserToJSON_fileStructure(inputRaw: string) {
    let inputStr = inputRaw.split("\r\n");
    let IOstructure: {
        [key: number]: IOstructure_element
    } = {}
    let entryCount_IOstructure = 0;

    let nextOutputInfo: {
        writeOnNextCmd: boolean,
        targetDirectory: string | IOstructure_element
        targetDirectory_stages: string[]
    } = {
        writeOnNextCmd: false,
        targetDirectory: "",
        targetDirectory_stages: []
    }
    let output_buffer: string[] = [];

    //let curr_directory = "";
    for (let i = 0; i < inputStr.length; i++) {
        let lineIsCmd: boolean;
        const curr_line = inputStr[i];
        curr_line[0] === "$" ? lineIsCmd=true : lineIsCmd=false;

        if (lineIsCmd) {
            const cmd: Command = parseCmd(curr_line);
            if (output_buffer.length > 0 && nextOutputInfo.writeOnNextCmd) {
                addBufferToIOstructure(output_buffer);
                output_buffer = [];
            }

            switch (cmd.keyword) {
                case "cd":
                    //nextOutputInfo.directory = curr_line.slice(5);
                    if (cmd.params.includes("..")) {
                        nextOutputInfo.targetDirectory = directory_moveUp(nextOutputInfo.targetDirectory as string, true)
                    }
                    else {
                        nextOutputInfo.targetDirectory = directory_moveTo(nextOutputInfo.targetDirectory as string, cmd.params[0], true);
                    }
                    break;
                case "ls":
                    nextOutputInfo.writeOnNextCmd = true;
                    break;
            }
        }
        if (!lineIsCmd) {
            output_buffer.push(curr_line);
        }

        // handle last output at end of file
        if (i === inputStr.length-1) {
            addBufferToIOstructure(output_buffer);
        }
    }
    return IOstructure;

    // local functions
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
    function addBufferToIOstructure(output_buffer: string[]): void {
        let filesArray: BasicFile[] = [];
        let subdirArray: IOstructure_element[] = [];
        deconstructBuffer(output_buffer);

        //TODO add filesArray and subdirArray to correct element in IOstructure[num].subdirectories[path]
        if (entryCount_IOstructure === 0) {
            IOstructure[entryCount_IOstructure] = {
                directory: nextOutputInfo.targetDirectory as string,
                data: filesArray,
                subdirectories: []
            }
        } else if (entryCount_IOstructure > 0) {
            IOstructure[entryCount_IOstructure] = {
                directory: nextOutputInfo.targetDirectory as string,
                data: filesArray,
                subdirectories: []
            }
        }
        IOstructure[entryCount_IOstructure].subdirectories.push(...subdirArray);

        entryCount_IOstructure++;
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
    function directory_moveTo(curr_dir:string, dest: string, verbose?: boolean): string {
        if (dest === "." || dest === "..") throw new RangeError("invalid value for dest:  '.' || '..'");
        nextOutputInfo.targetDirectory_stages.push(dest);

        let out: string;
        if (curr_dir === "/" && dest !== "/") {
            out = curr_dir + dest;
        } else if (curr_dir !== "/" && dest === "/") {
            out = "/";
        } else {
           out = curr_dir + "/" + dest;
        }
        if (verbose) console.log(`Moving from ${curr_dir} to ${out}`);
        return out;
    }
    function directory_moveUp(curr_dir:string, verbose?: boolean): string {
        nextOutputInfo.targetDirectory_stages.pop();

        let all_dirs = curr_dir.split("/");
        let out = "/";
        for (let i = 0; i < all_dirs.length-1; i++) {
            out = out.concat(all_dirs[i]);
        }
        if (verbose) console.log(`Moving from ${curr_dir} to ${out}`);
        return out;
    }
}

function getDirectorySize(directory: string, fileStructure: { [key: number]: IOstructure_element }) {
    // find directory in IOstructure
    let index_firstDepth = "init";
    for (let ind in fileStructure) {
        if (fileStructure[ind].directory === directory) index_firstDepth = ind;
    }
    if (index_firstDepth === "init") throw new Error(`directory ${directory} not found!`);

    let shallow_dirSize = 0;
    for (let i = 0; i < fileStructure[index_firstDepth].data.length; i++) {
        shallow_dirSize += fileStructure[index_firstDepth].data[i].fileSize;
    }
    console.log(`Shallow size of directory ${directory} is ${shallow_dirSize}`);
    if (fileStructure[index_firstDepth].subdirectories.length > 0) throw new Error("directory has subdirectories, counting deep size not implemented!");
}