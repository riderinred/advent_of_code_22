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
const input = fs.readFileSync("../inputs/day1.txt", "utf-8");
const parsed = parserToJSON(input);
let sums_per_elve = [];
Object.entries(parsed).forEach(([key, value]) => {
    let out = 0;
    value.forEach((val) => {
        out += val;
    });
    sums_per_elve[key] = out;
});
const max_elve = sums_per_elve.reduce((a, b) => Math.max(a, b), -Infinity);
console.log("The maximum calories carried are", max_elve);
sums_per_elve.sort((a, b) => {
    return b - a;
});
const top3_elves = sums_per_elve.slice(0, 3);
console.log("The top 3 elves are carrying", sums_per_elve.reduce((a, b) => {
    return a + b;
}, 0), "calories.");
console.table(top3_elves);
function parserToJSON(inputStr) {
    let first_json = {};
    let splits_1 = inputStr.split("\r\n\r\n");
    splits_1.forEach((val, ind) => {
        first_json[ind] = val.split("\r\n");
    });
    let out_json = {}, i = 1;
    Object.entries(first_json).forEach(([key, value]) => {
        out_json[i] = [];
        for (let val of value) {
            out_json[i].push(+val);
        }
        i++;
    });
    return out_json;
}
//# sourceMappingURL=day1_script.js.map