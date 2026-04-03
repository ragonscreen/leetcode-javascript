import { describe, expect, test } from 'bun:test';
import { search } from '../../../src/problems/0001-0100/0081_search-in-rotated-sorted-array-ii.js';

const testcases = [
        { nums: [2, 5, 6, 0, 0, 1, 2], target: 0, expected: true },
        { nums: [2, 5, 6, 0, 0, 1, 2], target: 3, expected: false },
        {
                nums: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
                target: 2,
                expected: true,
        },
        {
                nums: [2, 2, 2, 3, 2, 2, 2],
                target: 3,
                expected: true,
        },
];

describe('search', () => {
        test.each(
                structuredClone(testcases),
        )('search($nums, $target) -> $expected', ({
                nums,
                target,
                expected,
        }) => {
                expect(search(nums, target)).toStrictEqual(expected);
        });
});
