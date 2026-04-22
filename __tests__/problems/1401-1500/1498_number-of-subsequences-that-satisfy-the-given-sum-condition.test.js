import { describe, expect, test } from 'bun:test';
import { numSubseq } from '../../../src/problems/1401-1500/1498_number-of-subsequences-that-satisfy-the-given-sum-condition.js';

const testcases = [
        { nums: [3, 5, 6, 7], target: 9, expected: 4 },
        { nums: [3, 3, 6, 8], target: 10, expected: 6 },
        { nums: [2, 3, 3, 4, 6, 7], target: 12, expected: 61 },
        {
                nums: [
                        14, 4, 6, 6, 20, 8, 5, 6, 8, 12, 6, 10, 14, 9, 17, 16,
                        9, 7, 14, 11, 14, 15, 13, 11, 10, 18, 13, 17, 17, 14,
                        17, 7, 9, 5, 10, 13, 8, 5, 18, 20, 7, 5, 5, 15, 19, 14,
                ],
                target: 22,
                expected: 272_187_084,
        },
        {
                nums: [
                        9, 25, 9, 28, 24, 12, 17, 8, 28, 7, 21, 25, 10, 2, 16,
                        19, 12, 13, 15, 28, 14, 12, 24, 9, 6, 7, 2, 15, 19, 13,
                        30, 30, 23, 19, 11, 3, 17, 2, 14, 20, 22, 30, 12, 1, 11,
                        2, 2, 20, 20, 27, 15, 9, 10, 4, 12, 30, 13, 5, 2, 11,
                        29, 5, 3, 13, 22, 5, 16, 19, 7, 19, 11, 16, 11, 25, 29,
                        21, 29, 3, 2, 9, 20, 15, 9,
                ],
                target: 32,
                expected: 91_931_447,
        },
];

describe('numSubseq', () => {
        test.each(
                structuredClone(testcases),
        )('numSubseq($nums, $target) -> $expected', ({
                nums,
                target,
                expected,
        }) => {
                expect(numSubseq(nums, target)).toStrictEqual(expected);
        });
});
