import { describe, expect, test } from 'bun:test';
import { minOperations } from '../../../src/problems/3001-3100/3066_minimum-operations-to-exceed-threshold-value-ii.js';

const testcases = [
        { nums: [2, 11, 10, 1, 3], k: 10, expected: 2 },
        { nums: [1, 1, 2, 4, 9], k: 20, expected: 4 },
        { nums: [9, 98, 52, 8], k: 98, expected: 2 },
];

describe('minOperations', () => {
        test.each(
                structuredClone(testcases),
        )('minOperations($nums, $k) -> $expected', ({ nums, k, expected }) => {
                expect(minOperations(nums, k)).toStrictEqual(expected);
        });
});
