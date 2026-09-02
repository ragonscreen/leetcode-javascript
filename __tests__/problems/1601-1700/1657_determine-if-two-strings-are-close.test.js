import { describe, expect, test } from 'bun:test';
import { closeStrings } from '../../../src/problems/1601-1700/1657_determine-if-two-strings-are-close.js';

const testcases = [
        { word1: 'abc', word2: 'bca', expected: true },
        { word1: 'a', word2: 'aa', expected: false },
        { word1: 'cabbba', word2: 'abbccc', expected: true },
        { word1: 'abcdef', word2: 'pqrstu', expected: false },
];

describe('closeStrings', () => {
        test.each(
                structuredClone(testcases),
        )('closeStrings($word1, $word2) -> $expected', ({
                word1,
                word2,
                expected,
        }) => {
                expect(closeStrings(word1, word2)).toStrictEqual(expected);
        });
});
