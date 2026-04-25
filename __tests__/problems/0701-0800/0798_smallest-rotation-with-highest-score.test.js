import { describe, expect, test } from 'bun:test';
import { bestRotation } from '../../../src/problems/0701-0800/0798_smallest-rotation-with-highest-score.js';

const testcases = [
        { nums: [2, 3, 1, 4, 0], expected: 3 },
        { nums: [1, 3, 0, 2, 4], expected: 0 },
        {
                nums: [
                        46, 10, 47, 89, 97, 44, 32, 3, 16, 24, 26, 37, 89, 80,
                        55, 63, 36, 55, 77, 77, 85, 7, 11, 94, 34, 80, 51, 84,
                        48, 46, 33, 51, 28, 71, 64, 44, 69, 27, 75, 23, 79, 66,
                        39, 66, 98, 8, 94, 2, 46, 15, 7, 64, 52, 99, 98, 56, 47,
                        80, 76, 65, 33, 64, 11, 56, 72, 81, 1, 93, 16, 38, 11,
                        30, 66, 37, 67, 80, 65, 49, 48, 1, 65, 9, 14, 74, 81,
                        31, 51, 59, 99, 26, 52, 75, 19, 30, 73, 80, 40, 41, 27,
                        49,
                ],
                expected: 50,
        },
        {
                nums: [0, 3, 1, 3, 1],
                expected: 0,
        },
];

describe('bestRotation', () => {
        test.each(
                structuredClone(testcases),
        )('bestRotation($nums) -> $expected', ({ nums, expected }) => {
                expect(bestRotation(nums)).toStrictEqual(expected);
        });
});
