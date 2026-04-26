import { describe, expect, test } from 'bun:test';
import {
        minOperations,
        minOperations1,
} from '../../../src/problems/3901-4000/3914_minimum-operations-to-make-array-non-decreasing.js';

const testcases = [
        { nums: [3, 3, 2, 1], expected: 2 },
        { nums: [5, 1, 2, 3], expected: 4 },
        { nums: [10, 12, 4], expected: 8 },
        { nums: [10, 24, 1, 11, 3], expected: 31 },
];

describe('minOperations', () => {
        test.each(
                structuredClone(testcases),
        )('minOperations($nums) -> $expected', ({ nums, expected }) => {
                expect(minOperations(nums)).toStrictEqual(expected);
        });
});

describe('minOperations1', () => {
        test.each(
                structuredClone(testcases),
        )('minOperations1($nums) -> $expected', ({ nums, expected }) => {
                expect(minOperations1(nums)).toStrictEqual(expected);
        });
});
