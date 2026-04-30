import { describe, expect, test } from 'bun:test';
import { numberOfSubarrays } from '../../../src/problems/3101-3200/3113_find-the-number-of-subarrays-where-boundary-elements-are-maximum.js';

const testcases = [
        { nums: [1, 4, 3, 3, 2], expected: 6 },
        { nums: [3, 3, 3], expected: 6 },
        { nums: [1], expected: 1 },
];

describe('numberOfSubarrays', () => {
        test.each(
                structuredClone(testcases),
        )('numberOfSubarrays($nums) -> $expected', ({ nums, expected }) => {
                expect(numberOfSubarrays(nums)).toStrictEqual(expected);
        });
});
