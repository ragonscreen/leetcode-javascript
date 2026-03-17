import { describe, expect, test } from 'bun:test';
import { equalFrequency } from '../../../src/problems/2401-2500/2423_remove-letter-to-equalize-frequency.js';

const testcases = [
        { word: 'abcc', expected: true },
        { word: 'aazz', expected: false },
        { word: 'zaza', expected: false },
        { word: 'abbccc', expected: false },
        { word: 'abcd', expected: true },
        { word: 'bac', expected: true },
        { word: 'abbcc', expected: true },
        { word: 'aaabc', expected: false },
        { word: 'aaaabbbbccddeeff', expected: false },
        { word: 'aaabbbcccdd', expected: false },
        { word: 'aaabbbcccd', expected: true },
        { word: 'aa', expected: true },
        { word: 'abccddeeff', expected: false },
        { word: 'cccaa', expected: true },
        { word: 'ccccaa', expected: false },
        { word: 'cccaaddd', expected: false },
        { word: 'bcaebda', expected: false },
        { word: 'cccd', expected: true },
];

describe('equalFrequency', () => {
        test.each(
                structuredClone(testcases),
        )('equalFrequency($word) -> $expected', ({ word, expected }) => {
                expect(equalFrequency(word)).toStrictEqual(expected);
        });
});
