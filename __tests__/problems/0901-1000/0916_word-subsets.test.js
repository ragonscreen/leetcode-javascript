import { describe, expect, test } from 'bun:test';
import {
        wordSubsets,
        wordSubsets1,
} from '../../../src/problems/0901-1000/0916_word-subsets.js';

const testcases = [
        {
                words1: ['amazon', 'apple', 'facebook', 'google', 'leetcode'],
                words2: ['e', 'o'],
                expected: ['facebook', 'google', 'leetcode'],
        },
        {
                words1: ['amazon', 'apple', 'facebook', 'google', 'leetcode'],
                words2: ['lc', 'eo'],
                expected: ['leetcode'],
        },
        {
                words1: ['acaac', 'cccbb', 'aacbb', 'caacc', 'bcbbb'],
                words2: ['c', 'cc', 'b'],
                expected: ['cccbb'],
        },
];

describe('wordSubsets', () => {
        test.each(
                structuredClone(testcases),
        )('wordSubsets($words1, $words2) -> $expected', ({
                words1,
                words2,
                expected,
        }) => {
                expect(wordSubsets(words1, words2)).toStrictEqual(expected);
        });
});

describe('wordSubsets1', () => {
        test.each(
                structuredClone(testcases),
        )('wordSubsets1($words1, $words2) -> $expected', ({
                words1,
                words2,
                expected,
        }) => {
                expect(wordSubsets1(words1, words2)).toStrictEqual(expected);
        });
});
