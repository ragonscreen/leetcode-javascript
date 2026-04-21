import { describe, expect, test } from 'bun:test';
import { numberOfSubarrays } from '../../../src/problems/1201-1300/1248_count-number-of-nice-subarrays.js';

const testcases = [
        { nums: [1, 1, 2, 1, 1], k: 3, expected: 2 },
        { nums: [2, 4, 6], k: 1, expected: 0 },
        { nums: [2, 2, 2, 1, 2, 2, 1, 2, 2, 2], k: 2, expected: 16 },
];

describe('numberOfSubarrays', () => {
        test.each(
                structuredClone(testcases),
        )('numberOfSubarrays($nums, $k) -> $expected', ({
                nums,
                k,
                expected,
        }) => {
                expect(numberOfSubarrays(nums, k)).toStrictEqual(expected);
        });
});
