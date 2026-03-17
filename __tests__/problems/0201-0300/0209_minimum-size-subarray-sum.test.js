import { describe, expect, test } from 'bun:test';
import { minSubArrayLen } from '../../../src/problems/0201-0300/0209_minimum-size-subarray-sum.js';

const testcases = [
        { target: 7, nums: [2, 3, 1, 2, 4, 3], expected: 2 },
        { target: 4, nums: [1, 4, 4], expected: 1 },
        { target: 11, nums: [1, 1, 1, 1, 1, 1, 1, 1], expected: 0 },
        { target: 7, nums: [8], expected: 1 },
        { target: 4, nums: [1, 1, 1], expected: 0 },
        { target: 7, nums: [1, 1, 7], expected: 1 },
];

describe('minSubArrayLen', () => {
        test.each(
                structuredClone(testcases),
        )('minSubArrayLen($target, $nums) -> $expected', ({
                target,
                nums,
                expected,
        }) => {
                expect(minSubArrayLen(target, nums)).toStrictEqual(expected);
        });
});
