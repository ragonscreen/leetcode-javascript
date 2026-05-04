import { describe, expect, test } from 'bun:test';
import {
        sortArray,
        sortArray1,
        sortArray2,
} from '../../../src/problems/0901-1000/0912_sort-an-array.js';

const testcases = [
        { nums: [5, 2, 3, 1], expected: [1, 2, 3, 5] },
        { nums: [5, 1, 1, 2, 0, 0], expected: [0, 0, 1, 1, 2, 5] },
        { nums: [5, 1, 1, -2, 0, 0], expected: [-2, 0, 0, 1, 1, 5] },
];

describe('sortArray', () => {
        test.each(
                structuredClone(testcases),
        )('sortArray($nums) -> $expected', ({ nums, expected }) => {
                expect(Array.from(sortArray(nums))).toStrictEqual(expected);
        });
});

describe('sortArray1', () => {
        test.each(
                structuredClone(testcases),
        )('sortArray1($nums) -> $expected', ({ nums, expected }) => {
                expect(Array.from(sortArray1(nums))).toStrictEqual(expected);
        });
});

describe('sortArray2', () => {
        test.each(
                structuredClone(testcases),
        )('sortArray2($nums) -> $expected', ({ nums, expected }) => {
                expect(Array.from(sortArray2(nums))).toStrictEqual(expected);
        });
});
