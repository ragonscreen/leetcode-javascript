import { describe, expect, test } from 'bun:test';
import { minOperations } from '../../../src/problems/2801-2900/2870_minimum-number-of-operations-to-make-array-empty.js';

const testcases = [
        { nums: [2, 3, 3, 2, 2, 4, 2, 3, 4], expected: 4 },
        { nums: [2, 1, 2, 2, 3, 3], expected: -1 },
        {
                nums: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
                expected: 5,
        },
];

describe('minOperations', () => {
        test.each(
                structuredClone(testcases),
        )('minOperations($nums) -> $expected', ({ nums, expected }) => {
                expect(minOperations(nums)).toStrictEqual(expected);
        });
});
