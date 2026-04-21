import { describe, expect, test } from 'bun:test';
import { countSubarrays } from '../../../src/problems/2901-3000/2962_count-subarrays-where-max-element-appears-at-least-k-times.js';

const testcases = [
        { nums: [1, 3, 2, 3, 3], k: 2, expected: 6 },
        { nums: [1, 4, 2, 1], k: 3, expected: 0 },
        {
                nums: [
                        61, 23, 38, 23, 56, 40, 82, 56, 82, 82, 82, 70, 8, 69,
                        8, 7, 19, 14, 58, 42, 82, 10, 82, 78, 15, 82,
                ],
                k: 2,
                expected: 224,
        },
];

describe('countSubarrays', () => {
        test.each(
                structuredClone(testcases),
        )('countSubarrays($nums, $k) -> $expected', ({ nums, k, expected }) => {
                expect(countSubarrays(nums, k)).toStrictEqual(expected);
        });
});
