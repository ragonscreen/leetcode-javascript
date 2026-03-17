import { describe, expect, test } from 'bun:test';
import { mergeAlternately } from '../../../src/problems/1701-1800/1768_merge-strings-alternately.js';

const testcases = [
        { word1: 'abc', word2: 'pqr', expected: 'apbqcr' },
        { word1: 'ab', word2: 'pqrs', expected: 'apbqrs' },
        { word1: 'abcd', word2: 'pq', expected: 'apbqcd' },
];

describe('mergeAlternately', () => {
        test.each(
                structuredClone(testcases),
        )('mergeAlternately($word1, $word2) -> $expected', ({
                word1,
                word2,
                expected,
        }) => {
                expect(mergeAlternately(word1, word2)).toStrictEqual(expected);
        });
});
