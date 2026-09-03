import { describe, expect, test } from 'bun:test';

import { checkDivisibility } from '../../../src/problems/3601-3700/3622_check-divisibility-by-digit-sum-and-product.js';

const testcases = [
        { n: 99, expected: true },
        { n: 23, expected: false },
];

describe('checkDivisibility', () => {
        test.each(structuredClone(testcases))(
                'checkDivisibility($n) -> $expected',
                ({ n, expected }) => {
                        expect(checkDivisibility(n)).toStrictEqual(expected);
                },
        );
});
