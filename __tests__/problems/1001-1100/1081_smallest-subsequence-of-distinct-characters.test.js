import { describe, expect, test } from 'bun:test';
import { smallestSubsequence } from '../../../src/problems/1001-1100/1081_smallest-subsequence-of-distinct-characters.js';

const testcases = [
        { s: 'bcabc', expected: 'abc' },
        { s: 'cbacdcbc', expected: 'acdb' },
        { s: 'dcba', expected: 'dcba' },
];

describe('smallestSubsequence', () => {
        test.each(
                structuredClone(testcases),
        )('smallestSubsequence($s) -> $expected', ({ s, expected }) => {
                expect(smallestSubsequence(s)).toStrictEqual(expected);
        });
});
