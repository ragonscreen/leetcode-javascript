import { describe, expect, test } from 'bun:test';
import { numSubarrayProductLessThanK } from '../../../src/problems/0701-0800/0713_subarray-product-less-than-k.js';

const testcases = [
        { nums: [10, 5, 2, 6], k: 100, expected: 8 },
        { nums: [1, 2, 3], k: 0, expected: 0 },
];

describe('numSubarrayProductLessThanK', () => {
        test.each(
                structuredClone(testcases),
        )('numSubarrayProductLessThanK($nums, $k) -> $expected', ({
                nums,
                k,
                expected,
        }) => {
                expect(numSubarrayProductLessThanK(nums, k)).toStrictEqual(
                        expected,
                );
        });
});
