import { describe, expect, test } from 'bun:test';
import { isValid } from '../../../src/problems/0001-0100/0020_valid-parentheses.js';

const testcases = [
        { s: '()', expected: true },
        { s: '()[]{}', expected: true },
        { s: '(]', expected: false },
        { s: '([])', expected: true },
        { s: '([)]', expected: false },
];

describe('isValid', () => {
        test.each(structuredClone(testcases))('isValid($s) -> $expected', ({
                s,
                expected,
        }) => {
                expect(isValid(s)).toStrictEqual(expected);
        });
});
