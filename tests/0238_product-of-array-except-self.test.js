import { describe, expect, test } from 'vitest';
import productExceptSelf from '../src/problems/solved/0238_product-of-array-except-self.js';
import { normaliseNegZero } from './utils/number.js';

describe('productExceptSelf', () => {
        test('returns products of array except self', () => {
                expect(productExceptSelf([1, 2, 3, 4])).toStrictEqual([
                        24, 12, 8, 6,
                ]);
        });

        test('handles arrays containing 0', () => {
                expect(
                        productExceptSelf([-1, 1, 0, -3, 3]).map(
                                normaliseNegZero,
                        ),
                ).toStrictEqual([0, 0, 9, 0, 0]);
        });
});
