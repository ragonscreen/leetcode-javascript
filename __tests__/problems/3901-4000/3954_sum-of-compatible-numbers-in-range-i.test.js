import { describe, expect, test } from 'bun:test';
import { sumOfGoodIntegers } from '../../../src/problems/3901-4000/3954_sum-of-compatible-numbers-in-range-i.js';

const testcases = [
        { n: 2, k: 3, expected: 10 },
        { n: 5, k: 1, expected: 0 },
];

describe('sumOfGoodIntegers', () => {
        test.each(
                structuredClone(testcases),
        )('sumOfGoodIntegers($n, $k) -> $expected', ({ n, k, expected }) => {
                expect(sumOfGoodIntegers(n, k)).toStrictEqual(expected);
        });
});
