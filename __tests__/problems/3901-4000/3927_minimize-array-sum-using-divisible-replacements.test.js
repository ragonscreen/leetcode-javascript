import { describe, expect, test } from 'bun:test';
import {
        minArraySum,
        minArraySum1,
} from '../../../src/problems/3901-4000/3927_minimize-array-sum-using-divisible-replacements.js';

const testcases = [
        { nums: [3, 6, 2], expected: 7 },
        { nums: [4, 2, 8, 3], expected: 9 },
        { nums: [7, 5, 9], expected: 21 },
];

describe('minArraySum', () => {
        test.each(
                structuredClone(testcases),
        )('minArraySum($nums) -> $expected', ({ nums, expected }) => {
                expect(minArraySum(nums)).toStrictEqual(expected);
        });
});

describe('minArraySum1', () => {
        test.each(
                structuredClone(testcases),
        )('minArraySum1($nums) -> $expected', ({ nums, expected }) => {
                expect(minArraySum1(nums)).toStrictEqual(expected);
        });
});
