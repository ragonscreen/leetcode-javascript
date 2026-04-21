import { describe, expect, test } from 'bun:test';
import {
        minFlips,
        minFlips1,
} from '../../../src/problems/1801-1900/1888_minimum-number-of-flips-to-make-the-binary-string-alternating.js';

const testcases = [
        { s: '111000', expected: 2 },
        { s: '010', expected: 0 },
        { s: '1110', expected: 1 },
        { s: '01001001101', expected: 2 },
];

describe('minFlips', () => {
        test.each(structuredClone(testcases))('minFlips($s) -> $expected', ({
                s,
                expected,
        }) => {
                expect(minFlips(s)).toStrictEqual(expected);
        });
});

describe('minFlips1', () => {
        test.each(structuredClone(testcases))('minFlips1($s) -> $expected', ({
                s,
                expected,
        }) => {
                expect(minFlips1(s)).toStrictEqual(expected);
        });
});
