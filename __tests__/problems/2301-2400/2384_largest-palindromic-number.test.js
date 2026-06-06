import { describe, expect, test } from 'bun:test';
import { largestPalindromic } from '../../../src/problems/2301-2400/2384_largest-palindromic-number.js';

const testcases = [
        { num: '444947137', expected: '7449447' },
        { num: '00009', expected: '9' },
        { num: '9', expected: '9' },
        { num: '6006', expected: '6006' },
        { num: '00001105', expected: '1005001' },
];

describe('largestPalindromic', () => {
        test.each(
                structuredClone(testcases),
        )('largestPalindromic($num) -> $expected', ({ num, expected }) => {
                expect(largestPalindromic(num)).toStrictEqual(expected);
        });
});
