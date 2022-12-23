import * as fs from 'fs';

const input_stacks = fs.readFileSync("../inputs/day5_stacks.txt", "utf-8");
const input_moves = fs.readFileSync("../inputs/day5_moves.txt", "utf-8");
const parsedStacks = parserToJSON_stacks(input_stacks);
const parsedMoves = parserToJSON_moves(input_moves);

const parsedStacks_test = {1: ["Z", "N"],
    2: ["M", "C", "D"],
    3: ["P"]}
const parsedMoves_test = {
    0: {move: 1, from: 2, to: 1},
    1: {move: 3, from: 1, to: 3},
    2: {move: 2, from: 2, to: 1},
    3: {move: 1, from: 1, to: 2},
}

// part 1
let stacks: {
    [key: number]: string[]
} = parsedStacks;
Object.entries(parsedMoves).forEach(([key, value]) => {
    moveCrates(value.move, value.from, value.to)
})
getAnswerCode("part 1");

// part 2
stacks = parserToJSON_stacks(input_stacks);
Object.entries(parsedMoves).forEach(([key, value]) => {
    moveCratesInOrderStatic(value.move, value.from, value.to)
})
getAnswerCode("part 2");


// functions
function getAnswerCode(title: string) {
    let answer_code = "";
    for (let ind in stacks) {
        let temp = stacks[ind];
        let top_crate = temp.pop();
        if (!top_crate) {
            console.warn(`Top crate of stack ${ind} is falsy. Stack:`);
            console.warn(stacks[ind]);
            answer_code = answer_code.concat("0");
        } else {
            console.log(`The top crate on stack ${ind} is ${top_crate}`);
            answer_code = answer_code.concat(top_crate);
        }
    }
    console.log(`The answer code for ${title} is ${answer_code}`);
}

function moveCratesInOrderStatic(count:number, from:number, to:number) {
    let crateBlock: string[] = [];
    for (let i = 0; i < count; i++) {
        let temp = stacks[from].pop();
        if (temp) crateBlock.push(temp);
    }
    const crate_length = Number(crateBlock.length)
    for (let i = 0; i < crate_length; i++) {
        stacks[to].push(crateBlock.pop());
    }
}

// alternative solution for part 2
function moveCratesInOrderDynamic(count:number, from:number, to:number) {
    let crateBlock: string[] = [];
    const starting_length = Number(stacks[from].length);
    for (let i = 0; i < Math.min(count, starting_length); i++) {
        let temp = stacks[from].pop();
        if (temp) crateBlock.push(temp);
    }
    const crate_length = Number(crateBlock.length)
    for (let i = 0; i < crate_length; i++) {
        stacks[to].push(crateBlock.pop());
    }
}

function moveCrates(count:number, from:number, to:number) {
    for (let i = 0; i < count; i++) {
        let temp = stacks[from].pop();
        stacks[to].push(temp);
    }
}

function parserToJSON_stacks(inputRaw) {
    let inputStr = inputRaw.split("\r\n");
    let maxCrates = Math.ceil(inputStr[8].length / 4);
    inputStr.splice(maxCrates-1, 1);

    let first_json: {
        [key: number]: string[]
    } = {}

    // Alternate solution can include filtering for letters
    //const regex = /[A-Z]/g;

    for (let i = 1; i <= maxCrates; i++) {
        first_json[i] = []
    }

    for (let i = inputStr.length - 1; i >= 0; i--) {
        let pos_input = 1;
        let pos_target = 1;
        while (pos_target <= 9) {
            let curr_crate = inputStr[i][pos_input];
            if (curr_crate !== " " && curr_crate !== "") {
                // truthy check to avoid undefined
                if (curr_crate) first_json[pos_target].push(curr_crate);
            }
            pos_input += 4;
            pos_target++;
        }
    }

    return first_json;
}

function parserToJSON_moves(inputStr: string) {
    let first_json: {
        [key: number]: {move: number, from: number, to: number}
    } = {}
    inputStr.split("\r\n").forEach((val, ind) => {
        first_json[ind] = {move: 0, from: 0, to: 0};

        const regex = /\d+/g; ///[1-9]/g
        let instruction_values = val.match(regex);
        first_json[ind].move = Number(instruction_values[0]);
        first_json[ind].from = Number(instruction_values[1]);
        first_json[ind].to = Number(instruction_values[2]);
    })

    return first_json;
}
