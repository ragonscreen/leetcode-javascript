import { describe, expect, test } from 'bun:test';
import {
        ladderLength,
        ladderLength1,
        ladderLength2,
        ladderLength3,
} from '../../../src/problems/0101-0200/0127_word-ladder.js';

const testcases = [
        {
                beginWord: 'hit',
                endWord: 'cog',
                wordList: ['hot', 'dot', 'dog', 'lot', 'log', 'cog'],
                expected: 5,
        },
        {
                beginWord: 'hit',
                endWord: 'cog',
                wordList: ['hot', 'dot', 'dog', 'lot', 'log'],
                expected: 0,
        },
];

describe('ladderLength', () => {
        test.each(
                structuredClone(testcases),
        )('ladderLength($beginWord, $endWord, $wordList) -> $expected', ({
                beginWord,
                endWord,
                wordList,
                expected,
        }) => {
                expect(
                        ladderLength(beginWord, endWord, wordList),
                ).toStrictEqual(expected);
        });
});

describe('ladderLength1', () => {
        test.each(
                structuredClone(testcases),
        )('ladderLength1($beginWord, $endWord, $wordList) -> $expected', ({
                beginWord,
                endWord,
                wordList,
                expected,
        }) => {
                expect(
                        ladderLength1(beginWord, endWord, wordList),
                ).toStrictEqual(expected);
        });
});

describe('ladderLength2', () => {
        test.each(
                structuredClone(testcases),
        )('ladderLength2($beginWord, $endWord, $wordList) -> $expected', ({
                beginWord,
                endWord,
                wordList,
                expected,
        }) => {
                expect(
                        ladderLength2(beginWord, endWord, wordList),
                ).toStrictEqual(expected);
        });
});

describe('ladderLength3', () => {
        test.each(
                structuredClone(testcases),
        )('ladderLength3($beginWord, $endWord, $wordList) -> $expected', ({
                beginWord,
                endWord,
                wordList,
                expected,
        }) => {
                expect(
                        ladderLength3(beginWord, endWord, wordList),
                ).toStrictEqual(expected);
        });
});
