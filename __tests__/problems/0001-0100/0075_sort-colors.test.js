import { describe, expect, test } from 'bun:test';
import {
        sortColors,
        sortColors1,
        sortColors2,
} from '../../../src/problems/0001-0100/0075_sort-colors.js';

const testcases = [
        { nums: [2, 0, 2, 1, 1, 0], expected: [0, 0, 1, 1, 2, 2] },
        { nums: [2, 0, 1], expected: [0, 1, 2] },
        { nums: [2], expected: [2] },
        { nums: [1, 2, 0], expected: [0, 1, 2] },
];

describe('sortColors', () => {
        test.each(
                structuredClone(testcases),
        )('sortColors($nums) -> $expected', ({ nums, expected }) => {
                expect(sortColors(nums)).toBeNil();
                expect(nums).toStrictEqual(expected);
        });
});

describe('sortColors1', () => {
        test.each(
                structuredClone(testcases),
        )('sortColors1($nums) -> $expected', ({ nums, expected }) => {
                expect(sortColors1(nums)).toBeNil();
                expect(nums).toStrictEqual(expected);
        });
});

describe('sortColors2', () => {
        test.each(
                structuredClone(testcases),
        )('sortColors2($nums) -> $expected', ({ nums, expected }) => {
                expect(sortColors2(nums)).toBeNil();
                expect(nums).toStrictEqual(expected);
        });
});
