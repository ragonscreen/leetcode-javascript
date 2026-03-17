import { describe, expect, test } from 'bun:test';
import {
        missingNumber,
        missingNumber1,
        missingNumber2,
        missingNumber3,
} from '../../../src/problems/0201-0300/0268_missing-number.js';

const testcases = [
        { nums: [3, 0, 1], expected: 2 },
        { nums: [0, 1], expected: 2 },
        { nums: [9, 6, 4, 2, 3, 5, 7, 0, 1], expected: 8 },
];

describe('missingNumber', () => {
        test.each(
                structuredClone(testcases),
        )('missingNumber($nums) -> $expected', ({ nums, expected }) => {
                expect(missingNumber(nums)).toStrictEqual(expected);
        });
});

describe('missingNumber1', () => {
        test.each(
                structuredClone(testcases),
        )('missingNumber1($nums) -> $expected', ({ nums, expected }) => {
                expect(missingNumber1(nums)).toStrictEqual(expected);
        });
});

describe('missingNumber2', () => {
        test.each(
                structuredClone(testcases),
        )('missingNumber2($nums) -> $expected', ({ nums, expected }) => {
                expect(missingNumber2(nums)).toStrictEqual(expected);
        });
});

describe('missingNumber3', () => {
        test.each(
                structuredClone(testcases),
        )('missingNumber3($nums) -> $expected', ({ nums, expected }) => {
                expect(missingNumber3(nums)).toStrictEqual(expected);
        });
});
