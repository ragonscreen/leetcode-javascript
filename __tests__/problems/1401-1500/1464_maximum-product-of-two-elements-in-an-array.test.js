import { describe, expect, test } from 'bun:test';
import { maxProduct } from '../../../src/problems/1401-1500/1464_maximum-product-of-two-elements-in-an-array.js';

const testcases = [
        { nums: [3, 4, 5, 2], expected: 12 },
        { nums: [1, 5, 4, 5], expected: 16 },
        { nums: [3, 7], expected: 12 },
];

describe('maxProduct', () => {
        test.each(
                structuredClone(testcases),
        )('maxProduct($nums) -> $expected', ({ nums, expected }) => {
                expect(maxProduct(nums)).toStrictEqual(expected);
        });
});
