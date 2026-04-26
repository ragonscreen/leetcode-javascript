import { describe, expect, test } from 'bun:test';
import {
        hasAlternatingBits,
        hasAlternatingBits1,
} from '../../../src/problems/0601-0700/0693_binary-number-with-alternating-bits.js';

const testcases = [
        { n: 5, expected: true },
        { n: 7, expected: false },
        { n: 11, expected: false },
        { n: 4, expected: false },
];

describe('hasAlternatingBits', () => {
        test.each(
                structuredClone(testcases),
        )('hasAlternatingBits($n) -> $expected', ({ n, expected }) => {
                expect(hasAlternatingBits(n)).toStrictEqual(expected);
        });
});

describe('hasAlternatingBits1', () => {
        test.each(
                structuredClone(testcases),
        )('hasAlternatingBits1($n) -> $expected', ({ n, expected }) => {
                expect(hasAlternatingBits1(n)).toStrictEqual(expected);
        });
});
