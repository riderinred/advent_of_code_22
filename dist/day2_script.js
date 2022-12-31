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
const input = fs.readFileSync("../inputs/day2.txt", "utf-8");
const parsed = parserToJSON(input);
console.log("hello world");
let myScore_playstyle = 0;
parsed.forEach((val) => {
    myScore_playstyle += determineScorePerRound_partOne(val);
});
console.log("My score after playing the codex is", myScore_playstyle);
let myScore_outcome = 0;
parsed.forEach((val) => {
    myScore_outcome += determineScorePerRound_partTwo(val);
});
console.log("My score after losing/winning as planned is", myScore_outcome);
function parserToJSON(inputStr) {
    let first_json = {};
    return inputStr.split("\r\n");
}
function determineScorePerRound_partOne(playCode) {
    const enemyPlay = playCode[0];
    const myPlay = playCode[2];
    if (enemyPlay === myPlay)
        return 3 + determineShapeScore(myPlay);
    let out = 0;
    switch (enemyPlay) {
        case "A":
            if (myPlay === "X")
                return getScores_sameShape(playCode);
            if (myPlay === "Y")
                out = 6;
            break;
        case "B":
            if (myPlay === "Y")
                return getScores_sameShape(playCode);
            if (myPlay === "Z")
                out = 6;
            break;
        case "C":
            if (myPlay === "Z")
                return getScores_sameShape(playCode);
            if (myPlay === "X")
                out = 6;
            break;
    }
    return out + determineShapeScore(myPlay);
    // local functions
    function getScores_sameShape(playCode) {
        return 3 + determineShapeScore(playCode[2]);
    }
}
function determineScorePerRound_partTwo(playCode) {
    const enemyPlay = playCode[0];
    const myResult = playCode[2];
    switch (enemyPlay) {
        case "A":
            if (myResult === "X")
                return determineShapeScore("C");
            if (myResult === "Y")
                return 3 + determineShapeScore("A");
            else
                return 6 + determineShapeScore("B");
        case "B":
            if (myResult === "X")
                return determineShapeScore("A");
            if (myResult === "Y")
                return 3 + determineShapeScore("B");
            else
                return 6 + determineShapeScore("C");
        case "C":
            if (myResult === "X")
                return determineShapeScore("B");
            if (myResult === "Y")
                return 3 + determineShapeScore("C");
            else
                return 6 + determineShapeScore("A");
    }
    // local functions
    function getShape_by_Result(playCode) {
        switch (enemyPlay) {
            case "A":
                if (myResult === "X")
                    return "";
                if (myResult === "Y")
                    return "";
                else
                    return "";
            case "B":
                if (myResult === "X")
                    return "";
                if (myResult === "Y")
                    return "";
                else
                    return "";
            case "C":
                if (myResult === "X")
                    return "";
                if (myResult === "Y")
                    return "";
                else
                    return "";
        }
    }
}
function determineShapeScore(myShape) {
    let out;
    myShape === "X" ? out = 1 : "";
    myShape === "Y" ? out = 2 : "";
    myShape === "Z" ? out = 3 : "";
    myShape === "A" ? out = 1 : "";
    myShape === "B" ? out = 2 : "";
    myShape === "C" ? out = 3 : "";
    return out;
}
//# sourceMappingURL=day2_script.js.map