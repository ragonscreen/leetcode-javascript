import { describe, expect, test } from 'bun:test';
import { minOperations } from '../../../src/problems/3901-4000/3942_minimum-operations-to-sort-a-permutation.js';

const testcases = [
        { nums: [0, 2, 1], expected: 2 },
        { nums: [1, 0, 2], expected: 2 },
        { nums: [2, 0, 1, 3], expected: -1 },
        { nums: [2, 1, 0, 3], expected: 2 },
        { nums: [1, 2, 0, 3], expected: -1 },
];

describe('minOperations', () => {
        test.each(
                structuredClone(testcases),
        )('minOperations($nums) -> $expected', ({ nums, expected }) => {
                expect(minOperations(nums)).toStrictEqual(expected);
        });
});
