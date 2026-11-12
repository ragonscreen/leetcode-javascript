import { describe, expect, test } from 'bun:test';

import {
        longestMonotonicSubarray,
        longestMonotonicSubarray1,
} from './3105_longest-strictly-increasing-or-strictly-decreasing-subarray.js';

const testcases = [
        { nums: [1, 4, 3, 3, 2], expected: 2 },
        { nums: [3, 3, 3, 3], expected: 1 },
        { nums: [3, 2, 1], expected: 3 },
        { nums: [1, 2, 10, 9, 2, 9, 3, 8], expected: 3 },
        { nums: [1, 10, 10], expected: 2 },
];

describe('longestMonotonicSubarray', () => {
        test.each(structuredClone(testcases))(
                'longestMonotonicSubarray($nums) -> $expected',
                ({ nums, expected }) => {
                        expect(longestMonotonicSubarray(nums)).toStrictEqual(expected);
                },
        );
});

describe('longestMonotonicSubarray1', () => {
        test.each(structuredClone(testcases))(
                'longestMonotonicSubarray1($nums) -> $expected',
                ({ nums, expected }) => {
                        expect(longestMonotonicSubarray1(nums)).toStrictEqual(expected);
                },
        );
});
