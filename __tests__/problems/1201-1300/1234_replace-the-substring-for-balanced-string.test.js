import { describe, expect, test } from 'bun:test';
import {
        balancedString,
        balancedString1,
} from '../../../src/problems/1201-1300/1234_replace-the-substring-for-balanced-string.js';

const testcases = [
        { s: 'QWER', expected: 0 },
        { s: 'QQWE', expected: 1 },
        { s: 'QQQW', expected: 2 },
        { s: 'QWQW', expected: 2 },
        { s: 'WQWRQQQW', expected: 3 },
];

describe('balancedString', () => {
        test.each(
                structuredClone(testcases),
        )('balancedString($s) -> $expected', ({ s, expected }) => {
                expect(balancedString(s)).toStrictEqual(expected);
        });
});

describe('balancedString1', () => {
        test.each(
                structuredClone(testcases),
        )('balancedString1($s) -> $expected', ({ s, expected }) => {
                expect(balancedString1(s)).toStrictEqual(expected);
        });
});
