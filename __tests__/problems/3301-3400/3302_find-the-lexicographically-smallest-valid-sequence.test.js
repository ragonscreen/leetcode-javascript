import { describe, expect, test } from 'bun:test';

import { validSequence } from '../../../src/problems/3301-3400/3302_find-the-lexicographically-smallest-valid-sequence.js';

const testcases = [
        { word1: 'vbcca', word2: 'abc', expected: [0, 1, 2] },
        { word1: 'bacdc', word2: 'abc', expected: [1, 2, 4] },
        { word1: 'aaaaaa', word2: 'aaabc', expected: [] },
        { word1: 'abc', word2: 'ab', expected: [0, 1] },
        { word1: 'abcdxefgxh', word2: 'axx', expected: [0, 1, 4] },
        { word1: 'abcdefgxh', word2: 'axx', expected: [0, 1, 7] },
        { word1: 'abc', word2: 'xy', expected: [] },
];

describe('validSequence', () => {
        test.each(structuredClone(testcases))(
                'validSequence($word1, $word2) -> $expected',
                ({ word1, word2, expected }) => {
                        expect(Array.from(validSequence(word1, word2))).toStrictEqual(expected);
                },
        );
});
