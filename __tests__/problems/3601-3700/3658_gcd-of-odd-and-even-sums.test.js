import { describe, expect, test } from 'bun:test';
import {
        gcdOfOddEvenSums,
        gcdOfOddEvenSums1,
} from '../../../src/problems/3601-3700/3658_gcd-of-odd-and-even-sums.js';

const testcases = [
        { n: 4, expected: 4 },
        { n: 5, expected: 5 },
];

describe('gcdOfOddEvenSums', () => {
        test.each(
                structuredClone(testcases),
        )('gcdOfOddEvenSums($n) -> $expected', ({ n, expected }) => {
                expect(gcdOfOddEvenSums(n)).toStrictEqual(expected);
        });
});

describe('gcdOfOddEvenSums1', () => {
        test.each(
                structuredClone(testcases),
        )('gcdOfOddEvenSums1($n) -> $expected', ({ n, expected }) => {
                expect(gcdOfOddEvenSums1(n)).toStrictEqual(expected);
        });
});
