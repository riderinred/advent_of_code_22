import * as fs from 'fs';

let input = fs.readFileSync("../inputs/day1.txt", "utf-8");
let parsed: {
    [key: number]: number[]
} = parserToJSON(input);

let sums_per_elve: number[] = []
Object.entries(parsed).forEach(
    ([key, value]) => {
        let out = 0
        value.forEach((val) => {
            out += val
        })
        sums_per_elve[key] = out
    }
)
const max_elve = sums_per_elve.reduce((a, b) => Math.max(a, b), -Infinity);
console.log("The maximum calories carried are", max_elve);

function parserToJSON(inputStr: string) {
    let first_json: {
        [key: number]: string[]
    } = {}
    let splits_1 = inputStr.split("\r\n\r\n");
    splits_1.forEach((val, ind) => {
        first_json[ind] = val.split("\r\n")
    })

    let out_json = {}, i = 1
    Object.entries(first_json).forEach(
      ([key, value]) => {
          out_json[i] = []
          for (let val of value) {
            out_json[i].push(+val)
          }
          i++
      }
    )

    return out_json
}