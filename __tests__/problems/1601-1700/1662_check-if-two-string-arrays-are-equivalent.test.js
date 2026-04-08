import { describe, expect, test } from 'bun:test';
import {
        arrayStringsAreEqual,
        arrayStringsAreEqual1,
} from '../../../src/problems/1601-1700/1662_check-if-two-string-arrays-are-equivalent.js';

const testcases = [
        { word1: ['ab', 'c'], word2: ['a', 'bc'], expected: true },
        { word1: ['a', 'cb'], word2: ['ab', 'c'], expected: false },
        { word1: ['abc', 'd', 'defg'], word2: ['abcddefg'], expected: true },
        { word1: ['abc', 'd', 'defg'], word2: ['abcddef'], expected: false },
        { word1: ['ab', 'ab', 'ab'], word2: ['ab'], expected: false },
];

describe('arrayStringsAreEqual', () => {
        test.each(
                structuredClone(testcases),
        )('arrayStringsAreEqual($word1, $word2) -> $expected', ({
                word1,
                word2,
                expected,
        }) => {
                expect(arrayStringsAreEqual(word1, word2)).toStrictEqual(
                        expected,
                );
        });
});

describe('arrayStringsAreEqual1', () => {
        test.each(
                structuredClone(testcases),
        )('arrayStringsAreEqual1($word1, $word2) -> $expected', ({
                word1,
                word2,
                expected,
        }) => {
                expect(arrayStringsAreEqual1(word1, word2)).toStrictEqual(
                        expected,
                );
        });
});
