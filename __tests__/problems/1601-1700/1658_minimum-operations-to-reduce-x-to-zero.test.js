import { describe, expect, test } from 'bun:test';
import { minOperations } from '../../../src/problems/1601-1700/1658_minimum-operations-to-reduce-x-to-zero.js';

const testcases = [
        { nums: [1, 1, 4, 2, 3], x: 5, expected: 2 },
        { nums: [5, 6, 7, 8, 9], x: 4, expected: -1 },
        { nums: [3, 2, 20, 1, 1, 3], x: 10, expected: 5 },
        { nums: [1, 1, 1], x: 5, expected: -1 },
        {
                nums: [
                        8828, 9581, 49, 9818, 9974, 9869, 9991, 10_000, 10_000,
                        10_000, 9999, 9993, 9904, 8819, 1231, 6309,
                ],
                x: 134_365,
                expected: 16,
        },
];

describe('minOperations', () => {
        test.each(
                structuredClone(testcases),
        )('minOperations($nums, $x) -> $expected', ({ nums, x, expected }) => {
                expect(minOperations(nums, x)).toStrictEqual(expected);
        });
});
