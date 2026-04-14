import { describe, expect, test } from 'bun:test';
import { trailingZeroes } from '../../../src/problems/0101-0200/0172_factorial-trailing-zeroes.js';

const testcases = [
        { n: 3, expected: 0 },
        { n: 5, expected: 1 },
        { n: 0, expected: 0 },
];

describe('trailingZeroes', () => {
        test.each(
                structuredClone(testcases),
        )('trailingZeroes($n) -> $expected', ({ n, expected }) => {
                expect(trailingZeroes(n)).toStrictEqual(expected);
        });
});
