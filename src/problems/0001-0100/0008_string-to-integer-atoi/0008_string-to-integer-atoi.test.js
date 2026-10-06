import { describe, expect, test } from 'bun:test';

import { normaliseNegZero } from '../../../utils/test-utils/number.js';
import { myAtoi, myAtoi1 } from './0008_string-to-integer-atoi.js';

const testcases = [
        { s: '42', expected: 42 },
        { s: '   -042', expected: -42 },
        { s: '1337c0d3', expected: 1337 },
        { s: '0-1', expected: 0 },
        { s: 'words and 987', expected: 0 },
        { s: '12.34', expected: 12 },
        { s: '  -  42', expected: 0 },
        { s: '-  42', expected: 0 },
        { s: '2147483648', expected: 2_147_483_647 },
        { s: '-2147483649', expected: -2_147_483_648 },
];

describe('myAtoi', () => {
        test.each(structuredClone(testcases))('myAtoi($s) -> $expected', ({ s, expected }) => {
                expect(normaliseNegZero(myAtoi(s))).toStrictEqual(expected);
        });
});

describe('myAtoi1', () => {
        test.each(structuredClone(testcases))('myAtoi1($s) -> $expected', ({ s, expected }) => {
                expect(normaliseNegZero(myAtoi1(s))).toStrictEqual(expected);
        });
});
