import { describe, expect, test } from 'bun:test';
import { countAlternatingSubarrays } from '../../../src/problems/3101-3200/3101_count-alternating-subarrays.js';

const testcases = [
        { nums: [0, 1, 1, 1], expected: 5 },
        { nums: [1, 0, 1, 0], expected: 10 },
];

describe('countAlternatingSubarrays', () => {
        test.each(
                structuredClone(testcases),
        )('countAlternatingSubarrays($nums) -> $expected', ({
                nums,
                expected,
        }) => {
                expect(countAlternatingSubarrays(nums)).toStrictEqual(expected);
        });
});
