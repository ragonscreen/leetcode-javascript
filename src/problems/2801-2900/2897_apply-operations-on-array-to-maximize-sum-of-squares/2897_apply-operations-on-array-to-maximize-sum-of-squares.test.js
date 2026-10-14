import { describe, expect, test } from 'bun:test';

import { maxSum } from './2897_apply-operations-on-array-to-maximize-sum-of-squares.js';

const testcases = [
        { nums: [2, 6, 5, 8], k: 2, expected: 261 },
        { nums: [4, 5, 4, 7], k: 3, expected: 90 },
];

describe('maxSum', () => {
        test.each(structuredClone(testcases))(
                'maxSum($nums, $k) -> $expected',
                ({ nums, k, expected }) => {
                        expect(maxSum(nums, k)).toStrictEqual(expected);
                },
        );
});
