import { describe, expect, test } from 'bun:test';
import { longestSubsequence } from '../../../src/problems/3701-3800/3702_longest-subsequence-with-non-zero-bitwise-xor.js';

const testcases = [
        { nums: [1, 2, 3], expected: 2 },
        { nums: [2, 3, 4], expected: 3 },
];

describe('longestSubsequence', () => {
        test.each(
                structuredClone(testcases),
        )('longestSubsequence($nums) -> $expected', ({ nums, expected }) => {
                expect(longestSubsequence(nums)).toStrictEqual(expected);
        });
});
