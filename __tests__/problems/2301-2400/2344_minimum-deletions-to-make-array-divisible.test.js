import { describe, expect, test } from 'bun:test';
import {
        minOperations,
        minOperations1,
} from '../../../src/problems/2301-2400/2344_minimum-deletions-to-make-array-divisible.js';

const testcases = [
        { nums: [2, 3, 2, 4, 3], numsDivide: [9, 6, 9, 3, 15], expected: 2 },
        { nums: [4, 3, 6], numsDivide: [8, 2, 6, 10], expected: -1 },
        { nums: [2, 2, 3], numsDivide: [6, 12, 18, 24], expected: 0 },
];

describe('minOperations', () => {
        test.each(
                structuredClone(testcases),
        )('minOperations($nums, $numsDivide) -> $expected', ({
                nums,
                numsDivide,
                expected,
        }) => {
                expect(minOperations(nums, numsDivide)).toStrictEqual(expected);
        });
});

describe('minOperations1', () => {
        test.each(
                structuredClone(testcases),
        )('minOperations1($nums, $numsDivide) -> $expected', ({
                nums,
                numsDivide,
                expected,
        }) => {
                expect(minOperations1(nums, numsDivide)).toStrictEqual(
                        expected,
                );
        });
});
