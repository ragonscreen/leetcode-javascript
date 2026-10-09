import { describe, expect, test } from 'bun:test';

import { isValid, isValid1 } from './0020_valid-parentheses.js';

const testcases = [
        { s: '()', expected: true },
        { s: '()[]{}', expected: true },
        { s: '(]', expected: false },
        { s: '([])', expected: true },
        { s: '([)]', expected: false },
];

describe('isValid', () => {
        test.each(structuredClone(testcases))('isValid($s) -> $expected', ({ s, expected }) => {
                expect(isValid(s)).toStrictEqual(expected);
        });
});

describe('isValid1', () => {
        test.each(structuredClone(testcases))('isValid1($s) -> $expected', ({ s, expected }) => {
                expect(isValid1(s)).toStrictEqual(expected);
        });
});
