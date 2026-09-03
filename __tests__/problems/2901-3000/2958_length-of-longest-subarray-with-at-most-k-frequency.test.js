import { describe, expect, test } from 'bun:test';

import {
        maxSubarrayLength,
        maxSubarrayLength1,
} from '../../../src/problems/2901-3000/2958_length-of-longest-subarray-with-at-most-k-frequency.js';

const testcases = [
        { nums: [1, 2, 3, 1, 2, 3, 1, 2], k: 2, expected: 6 },
        { nums: [1, 2, 1, 2, 1, 2, 1, 2], k: 1, expected: 2 },
        { nums: [5, 5, 5, 5, 5, 5, 5], k: 4, expected: 4 },
        { nums: [1, 1_000_000_000], k: 2, expected: 2 },
];

describe('maxSubarrayLength', () => {
        test.each(structuredClone(testcases))(
                'maxSubarrayLength($nums, $k) -> $expected',
                ({ nums, k, expected }) => {
                        expect(maxSubarrayLength(nums, k)).toStrictEqual(expected);
                },
        );
});

describe('maxSubarrayLength1', () => {
        test.each(structuredClone(testcases))(
                'maxSubarrayLength1($nums, $k) -> $expected',
                ({ nums, k, expected }) => {
                        expect(maxSubarrayLength1(nums, k)).toStrictEqual(expected);
                },
        );
});
