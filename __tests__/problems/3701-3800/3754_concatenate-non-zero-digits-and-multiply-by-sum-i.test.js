import { describe, expect, test } from 'bun:test';

import { sumAndMultiply } from '../../../src/problems/3701-3800/3754_concatenate-non-zero-digits-and-multiply-by-sum-i.js';

const testcases = [
        { n: 10_203_004, expected: 12_340 },
        { n: 1000, expected: 1 },
];

describe('sumAndMultiply', () => {
        test.each(structuredClone(testcases))(
                'sumAndMultiply($n) -> $expected',
                ({ n, expected }) => {
                        expect(sumAndMultiply(n)).toStrictEqual(expected);
                },
        );
});
