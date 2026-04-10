import { describe, expect, test } from 'bun:test';
import { isNumber } from '../../../src/problems/0001-0100/0065_valid-number.js';

const testcases = [
        { s: '0', expected: true },
        { s: 'e', expected: false },
        { s: '.', expected: false },
        { s: '+78.8', expected: true },
        { s: '.1', expected: true },
        { s: '-.1', expected: true },
        { s: '9', expected: true },
        { s: '+78.8e10', expected: true },
        { s: '+78.8e-10', expected: true },
];

describe('isNumber', () => {
        test.each(structuredClone(testcases))('isNumber($s) -> $expected', ({
                s,
                expected,
        }) => {
                expect(isNumber(s)).toStrictEqual(expected);
        });
});
