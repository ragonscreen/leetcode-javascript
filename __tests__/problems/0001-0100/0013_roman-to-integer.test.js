import { describe, expect, test } from 'bun:test';
import {
        romanToInt,
        romanToInt1,
} from '../../../src/problems/0001-0100/0013_roman-to-integer.js';

const testcases = [
        { s: 'III', expected: 3 },
        { s: 'LVIII', expected: 58 },
        { s: 'MCMXCIV', expected: 1994 },
];

describe('romanToInt', () => {
        test.each(structuredClone(testcases))('romanToInt($s) -> $expected', ({
                s,
                expected,
        }) => {
                expect(romanToInt(s)).toStrictEqual(expected);
        });
});

describe('romanToInt1', () => {
        test.each(structuredClone(testcases))('romanToInt1($s) -> $expected', ({
                s,
                expected,
        }) => {
                expect(romanToInt1(s)).toStrictEqual(expected);
        });
});
