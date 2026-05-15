import { describe, expect, test } from 'bun:test';
import { findDuplicate } from '../../../src/problems/0201-0300/0287_find-the-duplicate-number.js';

const testcases = [
        { nums: [1, 3, 4, 2, 2], expected: 2 },
        { nums: [3, 1, 3, 4, 2], expected: 3 },
        { nums: [3, 3, 3, 3, 3], expected: 3 },
        { nums: [2, 5, 9, 6, 9, 3, 8, 9, 7, 1], expected: 9 },
        {
                nums: [
                        13, 46, 8, 11, 20, 17, 40, 13, 13, 13, 14, 1, 13, 36,
                        48, 41, 13, 13, 13, 13, 45, 13, 28, 42, 13, 10, 15, 22,
                        13, 13, 13, 13, 23, 9, 6, 13, 47, 49, 16, 13, 13, 39,
                        35, 13, 32, 29, 13, 25, 30, 13,
                ],
                expected: 13,
        },
        {
                nums: [
                        26, 2, 9, 20, 31, 7, 14, 32, 37, 15, 29, 6, 12, 38, 48,
                        22, 19, 45, 42, 40, 1, 12, 25, 36, 39, 30, 35, 4, 27,
                        12, 49, 16, 47, 3, 44, 41, 8, 17, 21, 23, 10, 43, 12,
                        34, 24, 28, 33, 13, 46, 11,
                ],
                expected: 12,
        },
];

describe('findDuplicate', () => {
        test.each(
                structuredClone(testcases),
        )('findDuplicate($nums) -> $expected', ({ nums, expected }) => {
                expect(findDuplicate(nums)).toStrictEqual(expected);
        });
});
