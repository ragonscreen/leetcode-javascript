import { describe, expect, test } from 'bun:test';
import {
        maxIncreasingSubarrays,
        maxIncreasingSubarrays1,
} from '../../../src/problems/3301-3400/3350_adjacent-increasing-subarrays-detection-ii.js';

const testcases = [
        { nums: [2, 5, 7, 8, 9, 2, 3, 4, 3, 1], expected: 3 },
        { nums: [1, 2, 3, 4, 4, 4, 4, 5, 6, 7], expected: 2 },
];

describe('maxIncreasingSubarrays', () => {
        test.each(
                structuredClone(testcases),
        )('maxIncreasingSubarrays($nums) -> $expected', ({
                nums,
                expected,
        }) => {
                expect(maxIncreasingSubarrays(nums)).toStrictEqual(expected);
        });
});

describe('maxIncreasingSubarrays1', () => {
        test.each(
                structuredClone(testcases),
        )('maxIncreasingSubarrays1($nums) -> $expected', ({
                nums,
                expected,
        }) => {
                expect(maxIncreasingSubarrays1(nums)).toStrictEqual(expected);
        });
});
