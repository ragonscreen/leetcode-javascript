import { describe, expect, test } from 'bun:test';
import {
        rotatedDigits,
        rotatedDigits1,
} from '../../../src/problems/0701-0800/0788_rotated-digits.js';

const testcases = [
        { n: 10, expected: 4 },
        { n: 1, expected: 0 },
        { n: 2, expected: 1 },
        { n: 100, expected: 40 },
];

describe('rotatedDigits', () => {
        test.each(
                structuredClone(testcases),
        )('rotatedDigits($n) -> $expected', ({ n, expected }) => {
                expect(rotatedDigits(n)).toStrictEqual(expected);
        });
});

describe('rotatedDigits1', () => {
        test.each(
                structuredClone(testcases),
        )('rotatedDigits1($n) -> $expected', ({ n, expected }) => {
                expect(rotatedDigits1(n)).toStrictEqual(expected);
        });
});
