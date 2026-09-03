import { describe, expect, test } from 'bun:test';

import { numOfStrings } from '../../../src/problems/1901-2000/1967_number-of-strings-that-appear-as-substrings-in-word.js';

const testcases = [
        { patterns: ['a', 'abc', 'bc', 'd'], word: 'abc', expected: 3 },
        { patterns: ['a', 'b', 'c'], word: 'aaaaabbbbb', expected: 2 },
        { patterns: ['a', 'a', 'a'], word: 'ab', expected: 3 },
];

describe('numOfStrings', () => {
        test.each(structuredClone(testcases))(
                'numOfStrings($patterns, $word) -> $expected',
                ({ patterns, word, expected }) => {
                        expect(numOfStrings(patterns, word)).toStrictEqual(expected);
                },
        );
});
