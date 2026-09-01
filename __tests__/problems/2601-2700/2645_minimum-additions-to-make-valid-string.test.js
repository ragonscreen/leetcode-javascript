import { describe, expect, test } from 'bun:test';
import {
        addMinimum,
        addMinimum1,
} from '../../../src/problems/2601-2700/2645_minimum-additions-to-make-valid-string.js';

const testcases = [
        { word: 'b', expected: 2 },
        { word: 'aaa', expected: 6 },
        { word: 'abc', expected: 0 },
        { word: 'ca', expected: 4 },
];

describe('addMinimum', () => {
        test.each(
                structuredClone(testcases),
        )('addMinimum($word) -> $expected', ({ word, expected }) => {
                expect(addMinimum(word)).toStrictEqual(expected);
        });
});

describe('addMinimum1', () => {
        test.each(
                structuredClone(testcases),
        )('addMinimum1($word) -> $expected', ({ word, expected }) => {
                expect(addMinimum1(word)).toStrictEqual(expected);
        });
});
