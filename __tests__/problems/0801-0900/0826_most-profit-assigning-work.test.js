import { describe, expect, test } from 'bun:test';

import {
        maxProfitAssignment,
        maxProfitAssignment1,
} from '../../../src/problems/0801-0900/0826_most-profit-assigning-work.js';

const testcases = [
        {
                difficulty: [2, 4, 6, 8, 10],
                profit: [10, 20, 30, 40, 50],
                worker: [4, 5, 6, 7],
                expected: 100,
        },
        { difficulty: [85, 47, 57], profit: [24, 66, 99], worker: [40, 25, 25], expected: 0 },
        {
                difficulty: [68, 35, 52, 47, 86],
                profit: [67, 17, 1, 81, 3],
                worker: [92, 10, 85, 84, 82],
                expected: 324,
        },
        {
                difficulty: [5, 50, 92, 21, 24, 70, 17, 63, 30, 53],
                profit: [68, 100, 3, 99, 56, 43, 26, 93, 55, 25],
                worker: [96, 3, 55, 30, 11, 58, 68, 36, 26, 1],
                expected: 765,
        },
];

describe('maxProfitAssignment', () => {
        test.each(structuredClone(testcases))(
                'maxProfitAssignment($difficulty, $profit, $worker) -> $expected',
                ({ difficulty, profit, worker, expected }) => {
                        expect(maxProfitAssignment(difficulty, profit, worker)).toStrictEqual(
                                expected,
                        );
                },
        );
});

describe('maxProfitAssignment1', () => {
        test.each(structuredClone(testcases))(
                'maxProfitAssignment1($difficulty, $profit, $worker) -> $expected',
                ({ difficulty, profit, worker, expected }) => {
                        expect(maxProfitAssignment1(difficulty, profit, worker)).toStrictEqual(
                                expected,
                        );
                },
        );
});
