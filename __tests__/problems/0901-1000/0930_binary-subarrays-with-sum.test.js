import { describe, expect, test } from 'bun:test';
import { numSubarraysWithSum } from '../../../src/problems/0901-1000/0930_binary-subarrays-with-sum.js';

const testcases = [
        { nums: [1, 0, 1, 0, 1], goal: 2, expected: 4 },
        { nums: [0, 0, 0, 0, 0], goal: 0, expected: 15 },
        { nums: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0], goal: 0, expected: 27 },
        {
                nums: [
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
                        0, 1, 1, 0, 1, 0,
                ],
                goal: 0,
                expected: 108,
        },
];

describe('numSubarraysWithSum', () => {
        test.each(
                structuredClone(testcases),
        )('numSubarraysWithSum($nums, $goal) -> $expected', ({
                nums,
                goal,
                expected,
        }) => {
                expect(numSubarraysWithSum(nums, goal)).toStrictEqual(expected);
        });
});
