import { describe, expect, test } from 'bun:test';

import { maxProduct } from '../../../src/problems/3501-3600/3536_maximum-product-of-two-digits.js';

const testcases = [
        { n: 31, expected: 3 },
        { n: 22, expected: 4 },
        { n: 124, expected: 8 },
];

describe('maxProduct', () => {
        test.each(structuredClone(testcases))('maxProduct($n) -> $expected', ({ n, expected }) => {
                expect(maxProduct(n)).toStrictEqual(expected);
        });
});
