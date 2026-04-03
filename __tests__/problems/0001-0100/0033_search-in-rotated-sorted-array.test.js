import { describe, expect, test } from 'bun:test';
import {
        search,
        search1,
} from '../../../src/problems/0001-0100/0033_search-in-rotated-sorted-array.js';

const testcases = [
        { nums: [4, 5, 6, 7, 0, 1, 2], target: 0, expected: 4 },
        { nums: [4, 5, 6, 7, 0, 1, 2], target: 3, expected: -1 },
        { nums: [0, 1, 2, 4, 5, 6, 7], target: 3, expected: -1 },
        { nums: [1], target: 0, expected: -1 },
        { nums: [3, 1], target: 3, expected: 0 },
        { nums: [3, 1], target: 1, expected: 1 },
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

describe('search1', () => {
        test.each(
                structuredClone(testcases),
        )('search1($nums, $target) -> $expected', ({
                nums,
                target,
                expected,
        }) => {
                expect(search1(nums, target)).toStrictEqual(expected);
        });
});
