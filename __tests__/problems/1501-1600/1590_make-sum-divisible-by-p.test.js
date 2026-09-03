import { describe, expect, test } from 'bun:test';

import { minSubarray } from '../../../src/problems/1501-1600/1590_make-sum-divisible-by-p.js';

const testcases = [
        { nums: [3, 1, 4, 2], p: 6, expected: 1 },
        { nums: [6, 3, 5, 2], p: 9, expected: 2 },
        { nums: [1, 2, 3], p: 3, expected: 0 },
        {
                nums: [8, 32, 31, 18, 34, 20, 21, 13, 1, 27, 23, 22, 11, 15, 30, 4, 2],
                p: 148,
                expected: 7,
        },
        { nums: [3, 1, 3], p: 3, expected: 1 },
];

describe('minSubarray', () => {
        test.each(structuredClone(testcases))(
                'minSubarray($nums, $p) -> $expected',
                ({ nums, p, expected }) => {
                        expect(minSubarray(nums, p)).toStrictEqual(expected);
                },
        );
});
