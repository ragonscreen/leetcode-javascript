import { describe, expect, test } from 'bun:test';
import { longestSubarray } from '../../../src/problems/1401-1500/1493_longest-subarray-of-1s-after-deleting-one-element.js';

const testcases = [
        { nums: [1, 1, 0, 1], expected: 3 },
        { nums: [0, 1, 1, 1, 0, 1, 1, 0, 1], expected: 5 },
        { nums: [1, 1, 1], expected: 2 },
];

describe('longestSubarray', () => {
        test.each(
                structuredClone(testcases),
        )('longestSubarray($nums) -> $expected', ({ nums, expected }) => {
                expect(longestSubarray(nums)).toStrictEqual(expected);
        });
});
