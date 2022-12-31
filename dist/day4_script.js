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
const input = fs.readFileSync("../inputs/day4.txt", "utf-8");
const parsed = parserToJSON(input);
let count_fullyContainedRanges = 0;
Object.entries(parsed).forEach(([key, value]) => {
    const first_section = value[0];
    const second_section = value[1];
    const first_boundaries = getBoundariesFromSection(first_section);
    const second_boundaries = getBoundariesFromSection(second_section);
    let found = false;
    if (first_boundaries[0] <= second_boundaries[0] && first_boundaries[1] >= second_boundaries[1]) {
        count_fullyContainedRanges++;
        found = true;
    }
    if (second_boundaries[0] <= first_boundaries[0] && second_boundaries[1] >= first_boundaries[1]) {
        if (!found)
            count_fullyContainedRanges++;
    }
});
console.log(`There are ${count_fullyContainedRanges} assignment pairs in which one range fully contains the other.`);
let count_overlappingRanges = 0;
Object.entries(parsed).forEach(([key, value]) => {
    const first_section = value[0];
    const second_section = value[1];
    const first_boundaries = getBoundariesFromSection(first_section);
    const second_boundaries = getBoundariesFromSection(second_section);
    let found = false;
    if ((first_boundaries[0] <= second_boundaries[1] && first_boundaries[0] >= second_boundaries[0]) ||
        (first_boundaries[1] >= second_boundaries[0] && first_boundaries[1] <= second_boundaries[1])) {
        if (!found)
            count_overlappingRanges++;
        found = true;
    }
    if (first_boundaries[0] <= second_boundaries[0] && first_boundaries[1] >= second_boundaries[1]) {
        if (!found)
            count_overlappingRanges++;
        found = true;
    }
    if (second_boundaries[0] <= first_boundaries[0] && second_boundaries[1] >= first_boundaries[1]) {
        if (!found)
            count_overlappingRanges++;
    }
});
console.log(`There are ${count_overlappingRanges} assignment pairs which overlap at all.`);
function getBoundariesFromSection(_in) {
    const boundaries_string = _in.split("-");
    let boundaries_num = [];
    boundaries_num[0] = +boundaries_string[0];
    boundaries_num[1] = +boundaries_string[1];
    return boundaries_num;
}
function parserToJSON(inputStr) {
    let first_json = {};
    inputStr.split("\r\n").forEach((val, ind) => {
        first_json[ind] = val.split(",");
    });
    return first_json;
}
//# sourceMappingURL=day4_script.js.map