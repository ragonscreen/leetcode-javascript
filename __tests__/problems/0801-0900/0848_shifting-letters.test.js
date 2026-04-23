import { describe, expect, test } from 'bun:test';
import {
        shiftingLetters,
        shiftingLetters1,
} from '../../../src/problems/0801-0900/0848_shifting-letters.js';

const testcases = [
        { s: 'abc', shifts: [3, 5, 9], expected: 'rpl' },
        { s: 'aaa', shifts: [1, 2, 3], expected: 'gfd' },
        { s: 'ruu', shifts: [26, 9, 17], expected: 'rul' },
];

describe('shiftingLetters', () => {
        test.each(
                structuredClone(testcases),
        )('shiftingLetters($s, $shifts) -> $expected', ({
                s,
                shifts,
                expected,
        }) => {
                expect(shiftingLetters(s, shifts)).toStrictEqual(expected);
        });
});

describe('shiftingLetters1', () => {
        test.each(
                structuredClone(testcases),
        )('shiftingLetters1($s, $shifts) -> $expected', ({
                s,
                shifts,
                expected,
        }) => {
                expect(shiftingLetters1(s, shifts)).toStrictEqual(expected);
        });
});
