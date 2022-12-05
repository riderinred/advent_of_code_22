import * as fs from 'fs';

const input = fs.readFileSync("../inputs/day4.txt", "utf-8");
const parsed = parserToJSON(input);

let count_fullyContainedRanges = 0;
Object.entries(parsed).forEach(
    ([key, value]) => {
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
            if (!found) count_fullyContainedRanges++;
        }
    }
)
console.log(`There are ${count_fullyContainedRanges} assignment pairs in which one range fully contains the other.`);

let count_overlappingRanges = 0;
Object.entries(parsed).forEach(
    ([key, value]) => {
        const first_section = value[0];
        const second_section = value[1];
        const first_boundaries = getBoundariesFromSection(first_section);
        const second_boundaries = getBoundariesFromSection(second_section);

        let found = false;
        if ((first_boundaries[0] <= second_boundaries[1] && first_boundaries[0] >= second_boundaries[0]) ||
            (first_boundaries[1] >= second_boundaries[0] && first_boundaries[1] <= second_boundaries[1])) {
            if (!found) count_overlappingRanges++;
            found = true;
        }

        if (first_boundaries[0] <= second_boundaries[0] && first_boundaries[1] >= second_boundaries[1]) {
            if (!found) count_overlappingRanges++;
            found = true;
        }
        if (second_boundaries[0] <= first_boundaries[0] && second_boundaries[1] >= first_boundaries[1]) {
            if (!found) count_overlappingRanges++;
        }
    }
)
console.log(`There are ${count_overlappingRanges} assignment pairs which overlap at all.`);

function getBoundariesFromSection(_in: string): number[] {
    const boundaries_string: string[] = _in.split("-");
    let boundaries_num: number[] = [];
    boundaries_num[0] = +boundaries_string[0];
    boundaries_num[1] = +boundaries_string[1];
    return boundaries_num;
}

function parserToJSON(inputStr: string) {
    let first_json: {
        [key: number]: string[]
    } = {}
    inputStr.split("\r\n").forEach((val, ind) => {
        first_json[ind] = val.split(",")
    })

    return first_json;
}
