import { describe, expect, test } from 'bun:test';
import { numberOfSpecialChars } from '../../../src/problems/3101-3200/3120_count-the-number-of-special-characters-i.js';

const testcases = [
        { word: 'aaAbcBC', expected: 3 },
        { word: 'abc', expected: 0 },
        { word: 'abBCab', expected: 1 },
];

describe('numberOfSpecialChars', () => {
        test.each(
                structuredClone(testcases),
        )('numberOfSpecialChars($word) -> $expected', ({ word, expected }) => {
                expect(numberOfSpecialChars(word)).toStrictEqual(expected);
        });
});
