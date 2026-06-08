import { describe, expect, test } from 'bun:test';
import { longestBeautifulSubstring } from '../../../src/problems/1801-1900/1839_longest-substring-of-all-vowels-in-order.js';

const testcases = [
        { word: 'aeiaaioaaaaeiiiiouuuooaauuaeiu', expected: 13 },
        { word: 'aeeeiiiioooauuuaeiou', expected: 5 },
        { word: 'a', expected: 0 },
];

describe('longestBeautifulSubstring', () => {
        test.each(
                structuredClone(testcases),
        )('longestBeautifulSubstring($word) -> $expected', ({
                word,
                expected,
        }) => {
                expect(longestBeautifulSubstring(word)).toStrictEqual(expected);
        });
});
