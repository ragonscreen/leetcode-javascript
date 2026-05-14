import { describe, expect, test } from 'bun:test';
import {
        countWordOccurrences,
        countWordOccurrences1,
} from '../../../src/problems/3901-4000/3926_count-valid-word-occurrences.js';

const testcases = [
        {
                chunks: ['hello wor', 'ld hello'],
                queries: ['hello', 'world', 'wor'],
                expected: [2, 1, 0],
        },
        {
                chunks: ['a-b a--b ', 'a-', 'b'],
                queries: ['a-b', 'a', 'b'],
                expected: [2, 1, 1],
        },
        {
                chunks: ['-cat dog- mouse'],
                queries: ['cat', 'dog', 'mouse', 'cat-dog'],
                expected: [1, 1, 1, 0],
        },
        {
                chunks: ['h-t x- '],
                queries: ['h-t', 'abdc', 'z', 'x'],
                expected: [1, 0, 0, 1],
        },
];

describe('countWordOccurrences', () => {
        test.each(
                structuredClone(testcases),
        )('countWordOccurrences($chunks, $queries) -> $expected', ({
                chunks,
                queries,
                expected,
        }) => {
                expect(countWordOccurrences(chunks, queries)).toStrictEqual(
                        expected,
                );
        });
});

describe('countWordOccurrences1', () => {
        test.each(
                structuredClone(testcases),
        )('countWordOccurrences1($chunks, $queries) -> $expected', ({
                chunks,
                queries,
                expected,
        }) => {
                expect(countWordOccurrences1(chunks, queries)).toStrictEqual(
                        expected,
                );
        });
});
