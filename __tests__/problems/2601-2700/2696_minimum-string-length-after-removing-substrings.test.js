import { describe, expect, test } from 'bun:test';
import { minLength } from '../../../src/problems/2601-2700/2696_minimum-string-length-after-removing-substrings.js';

const testcases = [
        { s: 'ABFCACDB', expected: 2 },
        { s: 'ACBBD', expected: 5 },
];

describe('minLength', () => {
        test.each(structuredClone(testcases))('minLength($s) -> $expected', ({
                s,
                expected,
        }) => {
                expect(minLength(s)).toStrictEqual(expected);
        });
});
