import { describe, expect, test } from 'bun:test';
import { minOperations } from '../../../src/problems/2001-2100/2009_minimum-number-of-operations-to-make-array-continuous.js';

const testcases = [
        { nums: [4, 2, 5, 3], expected: 0 },
        { nums: [1, 2, 3, 5, 6], expected: 1 },
        { nums: [1, 10, 100, 1000], expected: 3 },
        { nums: [11, 14, 7, 2, 2, 3, 9, 10, 16, 5, 8, 5], expected: 4 },
];

describe('minOperations', () => {
        test.each(
                structuredClone(testcases),
        )('minOperations($nums) -> $expected', ({ nums, expected }) => {
                expect(minOperations(nums)).toStrictEqual(expected);
        });
});
