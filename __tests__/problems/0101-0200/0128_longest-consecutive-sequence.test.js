import { describe, expect, test } from 'bun:test';
import { longestConsecutive } from '../../../src/problems/0101-0200/0128_longest-consecutive-sequence.js';

const testcases = [
        { nums: [100, 4, 200, 1, 3, 2], expected: 4 },
        { nums: [0, 3, 7, 2, 5, 8, 4, 6, 0, 1], expected: 9 },
        { nums: [1, 0, 1, 2], expected: 3 },
        { nums: [], expected: 0 },
];

describe('longestConsecutive', () => {
        test.each(
                structuredClone(testcases),
        )('longestConsecutive($nums) -> $expected', ({ nums, expected }) => {
                expect(longestConsecutive(nums)).toStrictEqual(expected);
        });
});
