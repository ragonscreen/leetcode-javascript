import { describe, expect, test } from 'bun:test';
import { maxSubArray } from '../../../src/problems/0001-0100/0053_maximum-subarray.js';

const testcases = [
        { nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4], expected: 6 },
        { nums: [1], expected: 1 },
        { nums: [5, 4, -1, 7, 8], expected: 23 },
];

describe('maxSubArray', () => {
        test.each(
                structuredClone(testcases),
        )('maxSubArray($nums) -> $expected', ({ nums, expected }) => {
                expect(maxSubArray(nums)).toStrictEqual(expected);
        });
});
