"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const input = fs.readFileSync("../inputs/day3.txt", "utf-8");
const parsed = parserToJSON(input);
let rucksacks = {};
for (let index in parsed) {
    const len = parsed[index].length;
    let splitPoint = len / 2;
    // 0 to 18; 19 to 37
    rucksacks[Number(index)] = [];
    rucksacks[Number(index)][0] = parsed[index].slice(0, splitPoint);
    rucksacks[Number(index)][1] = parsed[index].slice(splitPoint, len);
}
console.log("first rucksack is:", rucksacks[0]);
console.log("first rucksack[0] is:", rucksacks[0][0].length);
console.log("first rucksack[1] is:", rucksacks[0][1].length);
let sumPrioritiesDuplicates = 0;
for (let ind in rucksacks) {
    let curr_duplicates = findDuplicates(rucksacks[ind][0], rucksacks[ind][1]);
    if (curr_duplicates.length === 0)
        continue;
    let local_sumPriorities = 0;
    curr_duplicates.forEach((value) => {
        local_sumPriorities += getPriority(value);
    });
    sumPrioritiesDuplicates += local_sumPriorities;
}
console.log("The sum of the priorities of the items that appear in both " +
    "compartments of a rucksack is", sumPrioritiesDuplicates);
let batches = [];
for (let ind = 0; ind < Object.keys(rucksacks).length; ind += 3) {
    let first_elve = rucksacks[ind][0] + rucksacks[ind][1];
    let second_elve = rucksacks[ind + 1][0] + rucksacks[ind + 1][1];
    let third_elve = rucksacks[ind + 2][0] + rucksacks[ind + 2][1];
    let first_second_duplicates = findDuplicates(first_elve, second_elve);
    let first_third_duplicates = findDuplicates(first_elve, third_elve);
    let all_first = "", all_seconds = "";
    for (let val of first_second_duplicates) {
        all_first += val;
    }
    for (let val of first_third_duplicates) {
        all_seconds += val;
    }
    let batch = findDuplicates(all_first, all_seconds);
    batches.push(...batch);
}
let prioritySum_batches = 0;
for (let val of batches) {
    prioritySum_batches += getPriority(val);
}
console.log("The sum of the priorities of the batches is", prioritySum_batches);
function findDuplicates(a, b) {
    let a_set = new Set();
    let duplicates_set = new Set();
    let out = [];
    // a elements
    for (let i = 0; i < a.length; i++) {
        a_set.add(a[i]);
    }
    // b elements
    for (let i = 0; i < b.length; i++) {
        if (a_set.has(b[i]) && !duplicates_set.has(b[i])) {
            duplicates_set.add(b[i]);
            out.push(b[i]);
        }
    }
    if (out.length > 0) {
        console.log(`Found duplicates: ${out} in a: ${a} and b: ${b}`);
    }
    return out;
}
function parserToJSON(inputStr) {
    return inputStr.split("\r\n");
}
function getPriority(item) {
    if (item[0] === item[0].toLowerCase())
        return getLowerPriority(item);
    else
        return 26 + getLowerPriority(item.toLowerCase());
    function getLowerPriority(item) {
        switch (item) {
            case "a":
                return 1;
            case "b":
                return 2;
            case "c":
                return 3;
            case "d":
                return 4;
            case "e":
                return 5;
            case "f":
                return 6;
            case "g":
                return 7;
            case "h":
                return 8;
            case "i":
                return 9;
            case "j":
                return 10;
            case "k":
                return 11;
            case "l":
                return 12;
            case "m":
                return 13;
            case "n":
                return 14;
            case "o":
                return 15;
            case "p":
                return 16;
            case "q":
                return 17;
            case "r":
                return 18;
            case "s":
                return 19;
            case "t":
                return 20;
            case "u":
                return 21;
            case "v":
                return 22;
            case "w":
                return 23;
            case "x":
                return 24;
            case "y":
                return 25;
            case "z":
                return 26;
        }
        throw new Error(`No match found for ${item}`);
    }
}
//# sourceMappingURL=day3_script.js.map