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
const input = fs.readFileSync("../inputs/day6.txt", "utf-8");
const input_test = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw";
// part 1
const chars_to_startOfPacket = countCharsNum_StartOfPacket(input);
console.log("The number of characters to process before the start-of-packet marker is detected is", chars_to_startOfPacket);
// part 2
const chars_to_startOfMessage = countCharsNum_StartOfMessage(input);
console.log("The number of characters to process before the start-of-message marker is detected is", chars_to_startOfMessage);
function countCharsNum_StartOfPacket(signal) {
    for (let searchPos = 0; searchPos < signal.length; searchPos++) {
        const first = signal[searchPos];
        const second = signal[searchPos + 1];
        const third = signal[searchPos + 2];
        const fourth = signal[searchPos + 3];
        const possible_StartOfPacket = first + second + third + fourth;
        if (!confirmCharacterUniqueness(possible_StartOfPacket, first))
            continue;
        if (!confirmCharacterUniqueness(possible_StartOfPacket, second))
            continue;
        if (!confirmCharacterUniqueness(possible_StartOfPacket, third))
            continue;
        if (!confirmCharacterUniqueness(possible_StartOfPacket, fourth))
            continue;
        // +3 to get last char of start-of-packet marker. +1 because of counting from 0
        return searchPos + 3 + 1;
    }
}
// function for testing
function identifyStartOfPacket(signal) {
    for (let searchPos = 0; searchPos < signal.length; searchPos++) {
        const first = signal[searchPos];
        const second = signal[searchPos + 1];
        const third = signal[searchPos + 2];
        const fourth = signal[searchPos + 3];
        const possible_StartOfPacket = first + second + third + fourth;
        if (!confirmCharacterUniqueness(possible_StartOfPacket, first))
            continue;
        if (!confirmCharacterUniqueness(possible_StartOfPacket, second))
            continue;
        if (!confirmCharacterUniqueness(possible_StartOfPacket, third))
            continue;
        if (!confirmCharacterUniqueness(possible_StartOfPacket, fourth))
            continue;
        return possible_StartOfPacket;
    }
}
function confirmCharacterUniqueness(input, character) {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === character)
            count++;
        if (count > 1)
            return false;
    }
    return true;
}
function countCharsNum_StartOfMessage(signal) {
    for (let searchPos = 0; searchPos < signal.length; searchPos++) {
        let possible_StartOfMessage = "";
        let possible_StartOfMessage_list = [];
        for (let i = 0; i < 14; i++) {
            possible_StartOfMessage += signal[i + searchPos];
            possible_StartOfMessage_list.push(signal[i + searchPos]);
        }
        if (!confirmCharArrayUniqueness(possible_StartOfMessage, possible_StartOfMessage_list))
            continue;
        // +13 to get last char of start-of-packet marker. +1 because of counting from 0
        return searchPos + 13 + 1;
    }
}
function confirmCharArrayUniqueness(input, character) {
    let count_arr = [];
    for (let i = 0; i < character.length; i++) {
        count_arr[i] = 0;
    }
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < character.length; j++) {
            if (input[i] === character[j]) {
                count_arr[j]++;
                if (count_arr[j] > 1)
                    return false;
            }
        }
    }
    return true;
}
//# sourceMappingURL=day6_script.js.map