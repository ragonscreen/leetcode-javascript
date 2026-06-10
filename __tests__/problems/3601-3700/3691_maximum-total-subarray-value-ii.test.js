import { describe, expect, test } from 'bun:test';
import { maxTotalValue } from '../../../src/problems/3601-3700/3691_maximum-total-subarray-value-ii.js';

const testcases = [
        { nums: [1, 3, 2], k: 2, expected: 4 },
        { nums: [4, 2, 5, 1], k: 3, expected: 12 },
];

describe('maxTotalValue', () => {
        test.each(
                structuredClone(testcases),
        )('maxTotalValue($nums, $k) -> $expected', ({ nums, k, expected }) => {
                expect(maxTotalValue(nums, k)).toStrictEqual(expected);
        });
});
