import { describe, expect, test } from 'bun:test';
import {
        longestWord,
        longestWord1,
} from '../../../src/problems/0701-0800/0720_longest-word-in-dictionary.js';

const testcases = [
        { words: ['w', 'wo', 'wor', 'worl', 'world'], expected: 'world' },
        {
                words: ['a', 'banana', 'app', 'appl', 'ap', 'apply', 'apple'],
                expected: 'apple',
        },
];

describe('longestWord', () => {
        test.each(
                structuredClone(testcases),
        )('longestWord($words) -> $expected', ({ words, expected }) => {
                expect(longestWord(words)).toStrictEqual(expected);
        });
});

describe('longestWord1', () => {
        test.each(
                structuredClone(testcases),
        )('longestWord1($words) -> $expected', ({ words, expected }) => {
                expect(longestWord1(words)).toStrictEqual(expected);
        });
});
