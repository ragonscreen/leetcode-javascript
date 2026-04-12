import { describe, expect, test } from 'bun:test';
import {
        areNumbersAscending,
        areNumbersAscending1,
        areNumbersAscending2,
} from '../../../src/problems/2001-2100/2042_check-if-numbers-are-ascending-in-a-sentence.js';

const testcases = [
        {
                s: '1 box has 3 blue 4 red 6 green and 12 yellow marbles',
                expected: true,
        },
        { s: 'hello world 5 x 5', expected: false },
        {
                s: 'sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s',
                expected: false,
        },
        { s: '1 2 30 41 52 63', expected: true },
        { s: '1 2 50 4 5 ', expected: false },
];

describe('areNumbersAscending', () => {
        test.each(
                structuredClone(testcases),
        )('areNumbersAscending($s) -> $expected', ({ s, expected }) => {
                expect(areNumbersAscending(s)).toStrictEqual(expected);
        });
});

describe('areNumbersAscending1', () => {
        test.each(
                structuredClone(testcases),
        )('areNumbersAscending1($s) -> $expected', ({ s, expected }) => {
                expect(areNumbersAscending1(s)).toStrictEqual(expected);
        });
});

describe('areNumbersAscending2', () => {
        test.each(
                structuredClone(testcases),
        )('areNumbersAscending2($s) -> $expected', ({ s, expected }) => {
                expect(areNumbersAscending2(s)).toStrictEqual(expected);
        });
});
