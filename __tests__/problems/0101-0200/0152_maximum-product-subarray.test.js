import { describe, expect, test } from 'bun:test';
import { maxProduct } from '../../../src/problems/0101-0200/0152_maximum-product-subarray.js';

const testcases = [
        { nums: [2, 3, -2, 4], expected: 6 },
        { nums: [-2, 0, -1], expected: 0 },
        { nums: [-2, 3, -4], expected: 24 },
        { nums: [-2], expected: -2 },
        { nums: [-2, -3, -4], expected: 12 },
        { nums: [0], expected: 0 },
];

describe('maxProduct', () => {
        test.each(
                structuredClone(testcases),
        )('maxProduct($nums) -> $expected', ({ nums, expected }) => {
                expect(maxProduct(nums)).toStrictEqual(expected);
        });
});
