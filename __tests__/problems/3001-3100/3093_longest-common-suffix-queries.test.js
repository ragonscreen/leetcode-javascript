import { describe, expect, test } from 'bun:test';
import {
        stringIndices,
        stringIndices1,
} from '../../../src/problems/3001-3100/3093_longest-common-suffix-queries.js';

const testcases = [
        {
                wordsContainer: ['abcd', 'bcd', 'xbcd'],
                wordsQuery: ['cd', 'bcd', 'xyz'],
                expected: [1, 1, 1],
        },
        {
                wordsContainer: ['abcdefgh', 'poiuygh', 'ghghgh'],
                wordsQuery: ['gh', 'acbfgh', 'acbfegh'],
                expected: [2, 0, 2],
        },
        {
                wordsContainer: ['abcd', 'abcd', 'abcd'],
                wordsQuery: ['d', 'dc', 'cd'],
                expected: [0, 0, 0],
        },
        {
                wordsContainer: ['abcd', 'bcda'],
                wordsQuery: ['cdf', 'afa'],
                expected: [0, 1],
        },
];

describe('stringIndices', () => {
        test.each(
                structuredClone(testcases),
        )('stringIndices($wordsContainer, $wordsQuery) -> $expected', ({
                wordsContainer,
                wordsQuery,
                expected,
        }) => {
                expect(
                        Array.from(stringIndices(wordsContainer, wordsQuery)),
                ).toStrictEqual(expected);
        });
});

describe('stringIndices1', () => {
        test.each(
                structuredClone(testcases),
        )('stringIndices1($wordsContainer, $wordsQuery) -> $expected', ({
                wordsContainer,
                wordsQuery,
                expected,
        }) => {
                expect(
                        Array.from(stringIndices1(wordsContainer, wordsQuery)),
                ).toStrictEqual(expected);
        });
});
