import { describe, expect, test } from 'bun:test';
import { maximumProduct } from '../../../src/problems/0601-0700/0628_maximum-product-of-three-numbers.js';
import { normaliseNegZero } from '../../utils/number.js';

const testcases = [
        { nums: [1, 2, 3], expected: 6 },
        { nums: [1, 2, 3, 4], expected: 24 },
        { nums: [-1, -2, -3], expected: -6 },
        { nums: [0, -5, 6], expected: 0 },
        { nums: [10, 5, -1, 0], expected: 0 },
        { nums: [0, -1, -2, -3], expected: 0 },
        { nums: [-1, -2, -3, -4, -5, -6], expected: -6 },
        { nums: [1, 2, 3, 4, 5, 6], expected: 120 },
        { nums: [1, 2, 3, 4, 5, 6, -8], expected: 120 },
        { nums: [1, 2, 3, 6, -5, -4], expected: 120 },
        { nums: [4, -5, -4, -3, -2, -1, -6, -8], expected: 192 },
        { nums: [0, 0, 0, -1, -2, -3], expected: 0 },
];

describe('maximumProduct', () => {
        test.each(
                structuredClone(testcases),
        )('maximumProduct($nums) -> $expected', ({ nums, expected }) => {
                expect(normaliseNegZero(maximumProduct(nums))).toStrictEqual(
                        expected,
                );
        });
});
