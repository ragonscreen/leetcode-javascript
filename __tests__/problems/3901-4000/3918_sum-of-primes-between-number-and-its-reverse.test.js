import { describe, expect, test } from 'bun:test';
import { sumOfPrimesInRange } from '../../../src/problems/3901-4000/3918_sum-of-primes-between-number-and-its-reverse.js';

const testcases = [
        { n: 13, expected: 132 },
        { n: 10, expected: 17 },
        { n: 8, expected: 0 },
        { n: 1, expected: 0 },
        { n: 2, expected: 2 },
        { n: 3, expected: 3 },
];

describe('sumOfPrimesInRange', () => {
        test.each(
                structuredClone(testcases),
        )('sumOfPrimesInRange($n) -> $expected', ({ n, expected }) => {
                expect(sumOfPrimesInRange(n)).toStrictEqual(expected);
        });
});
