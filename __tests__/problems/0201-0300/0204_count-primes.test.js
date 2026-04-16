import { describe, expect, test } from 'bun:test';
import { countPrimes } from '../../../src/problems/0201-0300/0204_count-primes.js';

const testcases = [
        { n: 10, expected: 4 },
        { n: 0, expected: 0 },
        { n: 1, expected: 0 },
        { n: 100, expected: 25 },
];

describe('countPrimes', () => {
        test.each(structuredClone(testcases))('countPrimes($n) -> $expected', ({
                n,
                expected,
        }) => {
                expect(countPrimes(n)).toStrictEqual(expected);
        });
});
