import { describe, expect, test } from 'bun:test';

import { findSubarrays } from '../../../src/problems/2301-2400/2395_find-subarrays-with-equal-sum.js';

const testcases = [
        { nums: [4, 2, 4], expected: true },
        { nums: [1, 2, 3, 4, 5], expected: false },
        { nums: [0, 0, 0], expected: true },
];

describe('findSubarrays', () => {
        test.each(structuredClone(testcases))(
                'findSubarrays($nums) -> $expected',
                ({ nums, expected }) => {
                        expect(findSubarrays(nums)).toStrictEqual(expected);
                },
        );
});
