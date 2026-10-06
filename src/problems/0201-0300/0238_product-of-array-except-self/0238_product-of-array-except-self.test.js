import { describe, expect, test } from 'bun:test';

import { normaliseNegZero } from '../../../utils/test-utils/number.js';
import { productExceptSelf } from './0238_product-of-array-except-self.js';

const testcases = [
        { nums: [1, 2, 3, 4], expected: [24, 12, 8, 6] },
        { nums: [-1, 1, 0, -3, 3], expected: [0, 0, 9, 0, 0] },
];

describe('productExceptSelf', () => {
        test.each(structuredClone(testcases))(
                'productExceptSelf($nums) -> $expected',
                ({ nums, expected }) => {
                        expect(productExceptSelf(nums).map(normaliseNegZero)).toStrictEqual(
                                expected,
                        );
                },
        );
});
