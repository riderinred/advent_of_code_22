"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
// END TYPES
// BEGIN GLOBALS
const contestLines = loadInput();
const contestGrid = transformLinesToGrid(contestLines);
const testLines = loadInput(true);
const testGrid = transformLinesToGrid(testLines);
// END GLOBALS
// helper functions
function determineDataToUse(isTest, partToSolve) {
    if (partToSolve !== 1 && partToSolve !== 2)
        throw new RangeError();
    let gridToSolve;
    let inputType;
    if (isTest) {
        gridToSolve = testGrid;
        inputType = "test input";
    }
    else {
        gridToSolve = contestGrid;
        inputType = "contest input";
    }
    console.log(`Solving part ${partToSolve} of day 8 with ${inputType}.`);
    return gridToSolve;
}
function loadInput(isTest = false) {
    if (isTest) {
        const test = fs_1.default.readFileSync("../inputs/day8_test.txt", "utf-8");
        return test.split("\r\n");
    }
    const input = fs_1.default.readFileSync("../inputs/day8.txt", "utf-8");
    return input.split("\r\n");
}
function transformLinesToGrid(lines) {
    let out = [];
    for (let i = 0; i < lines.length; i++) {
        out[i] = [];
        for (let j = 0; j < lines[0].length; j++) {
            out[i][j] = Number(lines[i][j]);
        }
    }
    return out;
}
// part one
function checkIfInnerTreeIsVisible(grid, row, column, isVerbose = false) {
    //TODO guard functions to check row and column are inside grid?
    let isVisibleVertical = checkVisibilityVertical();
    let isVisibleHorizontal = checkVisibilityHorizontal();
    if (isVerbose && (isVisibleVertical || isVisibleHorizontal)) {
        console.log(`InnerTree row ${row} and column ${column} with value ${grid[row][column]} is visible`);
    }
    return isVisibleVertical || isVisibleHorizontal;
    // local functions
    function checkVisibilityVertical() {
        // build column
        let curr_column = [];
        for (let i = 0; i < grid.length; i++) {
            curr_column.push(grid[i][column]);
        }
        // check from top
        let out_top = true;
        for (let i = 0; i < row; i++) {
            if (curr_column[i] >= curr_column[row]) {
                out_top = false;
                break;
            }
        }
        // check from bottom
        let out_bot = true;
        for (let i = curr_column.length - 1; i > row; i--) {
            if (curr_column[i] >= curr_column[row]) {
                out_bot = false;
                break;
            }
        }
        const out_vertical = out_top || out_bot;
        return out_vertical;
    }
    function checkVisibilityHorizontal() {
        // build row
        let curr_row = [];
        for (let i = 0; i < grid[1].length; i++) {
            curr_row.push(grid[row][i]);
        }
        // check from left
        let out_left = true;
        for (let i = 0; i < column; i++) {
            if (curr_row[i] >= curr_row[column]) {
                out_left = false;
                break;
            }
        }
        // check from right
        let out_right = true;
        for (let i = curr_row.length - 1; i > column; i--) {
            if (curr_row[i] >= curr_row[column]) {
                out_right = false;
                break;
            }
        }
        return out_left || out_right;
    }
}
function getInnerTrees(grid) {
    let out = [];
    for (let i = 1; i < grid.length - 1; i++) {
        for (let j = 1; j < grid[1].length - 1; j++) {
            const temp = { row: i, column: j };
            out.push(temp);
        }
    }
    return out;
}
function getOuterTreesNum(grid, isVerbose = false) {
    let out = 0;
    out += grid.length * 2;
    out += grid[0].length * 2;
    out -= 4;
    if (isVerbose)
        console.log(`Found ${out} outer trees.`);
    return out;
}
function solvePartOne(isVerbose = false, isTest = false) {
    // Assignment: Consider your map; how many trees are visible from outside the grid?
    const gridToSolve = determineDataToUse(isTest, 1);
    const innerTrees = getInnerTrees(gridToSolve);
    let totalVisibleTrees = getOuterTreesNum(gridToSolve, isVerbose);
    for (let index in innerTrees) {
        let curr_tree = innerTrees[index];
        let currTreeIsVisible = checkIfInnerTreeIsVisible(gridToSolve, curr_tree.row, curr_tree.column, isVerbose);
        if (currTreeIsVisible)
            totalVisibleTrees++;
    }
    console.log(`There are ${totalVisibleTrees} trees visible from outside the forest.`);
}
// part two
function getScenicScoreOfTree(grid, row, column, isVerbose = false) {
    const distancesHorizontal = getViewingDistancesHorizontal();
    const distancesVertical = getViewingDistancesVertical();
    return distancesHorizontal[0] * distancesHorizontal[1] * distancesVertical[0] * distancesVertical[1];
    // local functions
    function getViewingDistancesVertical() {
        // build column
        let curr_column = [];
        for (let i = 0; i < grid.length; i++) {
            curr_column.push(grid[i][column]);
        }
        // check mid to top
        let distance_top = 0;
        for (let i = row + 1; i < curr_column.length; i++) {
            distance_top++;
            if (curr_column[i] >= curr_column[row]) {
                break;
            }
        }
        // check mid to bot
        let distance_bot = 0;
        for (let i = row - 1; i >= 0; i--) {
            distance_bot++;
            if (curr_column[i] >= curr_column[row]) {
                break;
            }
        }
        if (isVerbose) {
            console.log("Distances for " + row + "--" + column + " with value " + curr_column[row] + " are "
                + [distance_top, distance_bot]);
        }
        return [distance_top, distance_bot];
    }
    function getViewingDistancesHorizontal() {
        // build row
        let curr_row = [];
        for (let i = 0; i < grid[1].length; i++) {
            curr_row.push(grid[row][i]);
        }
        // check
        let distance_left = 0;
        for (let i = column + 1; i < curr_row.length; i++) {
            distance_left++;
            if (curr_row[i] >= curr_row[column]) {
                break;
            }
        }
        // check from right
        let distance_right = 0;
        for (let i = column - 1; i >= 0; i--) {
            distance_right++;
            if (curr_row[i] >= curr_row[column]) {
                break;
            }
        }
        return [distance_left, distance_right];
    }
}
function solvePartTwo(isVerbose = false, isTest = false) {
    // Assignment: Consider each tree on your map. What is the highest scenic score possible for any tree?
    const gridToSolve = determineDataToUse(isTest, 2);
    const innerTrees = getInnerTrees(gridToSolve);
    let bestTree = {
        scenicScore: 0,
        coordinates: { row: 0, column: 0 }
    };
    for (let index in innerTrees) {
        const curr_tree = innerTrees[index];
        const curr_scenicScore = getScenicScoreOfTree(gridToSolve, curr_tree.row, curr_tree.column, isVerbose);
        if (curr_scenicScore > bestTree.scenicScore) {
            if (isVerbose) {
                console.log(`New bestTree with scenicScore ${bestTree.scenicScore} and coordinates 
                    ${bestTree.coordinates.row}--${bestTree.coordinates.column}`);
            }
            bestTree.scenicScore = curr_scenicScore;
            bestTree.coordinates.row = curr_tree.row;
            bestTree.coordinates.column = curr_tree.column;
        }
    }
    console.log(`Found bestTree with scenicScore ${bestTree.scenicScore} and coordinates `
        + `${bestTree.coordinates.row}r--${bestTree.coordinates.column}c.`);
}
solvePartOne();
solvePartTwo();
//# sourceMappingURL=day8_script.js.map