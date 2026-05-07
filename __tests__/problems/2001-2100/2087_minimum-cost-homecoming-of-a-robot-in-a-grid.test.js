import { describe, expect, test } from 'bun:test';
import {
        minCost,
        minCost1,
        minCost2,
} from '../../../src/problems/2001-2100/2087_minimum-cost-homecoming-of-a-robot-in-a-grid.js';

const testcases = [
        {
                startPos: [1, 0],
                homePos: [2, 3],
                rowCosts: [5, 4, 3],
                colCosts: [8, 2, 6, 7],
                expected: 18,
        },
        {
                startPos: [0, 0],
                homePos: [0, 0],
                rowCosts: [5],
                colCosts: [26],
                expected: 0,
        },
];

describe('minCost', () => {
        test.each(
                structuredClone(testcases),
        )('minCost($startPos, $homePos, $rowCosts, $colCosts) -> $expected', ({
                startPos,
                homePos,
                rowCosts,
                colCosts,
                expected,
        }) => {
                expect(
                        minCost(startPos, homePos, rowCosts, colCosts),
                ).toStrictEqual(expected);
        });
});

describe('minCost1', () => {
        test.each(
                structuredClone(testcases),
        )('minCost1($startPos, $homePos, $rowCosts, $colCosts) -> $expected', ({
                startPos,
                homePos,
                rowCosts,
                colCosts,
                expected,
        }) => {
                expect(
                        minCost1(startPos, homePos, rowCosts, colCosts),
                ).toStrictEqual(expected);
        });
});

describe('minCost2', () => {
        test.each(
                structuredClone(testcases),
        )('minCost2($startPos, $homePos, $rowCosts, $colCosts) -> $expected', ({
                startPos,
                homePos,
                rowCosts,
                colCosts,
                expected,
        }) => {
                expect(
                        minCost2(startPos, homePos, rowCosts, colCosts),
                ).toStrictEqual(expected);
        });
});
