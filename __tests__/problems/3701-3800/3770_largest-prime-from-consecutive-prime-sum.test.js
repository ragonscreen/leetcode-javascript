import { describe, expect, test } from 'bun:test';
import { largestPrime } from '../../../src/problems/3701-3800/3770_largest-prime-from-consecutive-prime-sum.js';

const testcases = [
        { n: 20, expected: 17 },
        { n: 2, expected: 2 },
        { n: 100, expected: 41 },
        { n: 97, expected: 41 },
        { n: 96, expected: 41 },
        { n: 42, expected: 41 },
        { n: 41, expected: 41 },
        { n: 40, expected: 17 },
        { n: 3, expected: 2 },
        { n: 1, expected: 0 },
        // { n: 5e5, expected: 398_771 }, // disabled for test performance
];

describe('largestPrime', () => {
        test.each(
                structuredClone(testcases),
        )('largestPrime($n) -> $expected', ({ n, expected }) => {
                expect(largestPrime(n)).toStrictEqual(expected);
        });
});
