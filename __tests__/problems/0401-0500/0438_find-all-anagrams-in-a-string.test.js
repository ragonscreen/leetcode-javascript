import { describe, expect, test } from 'bun:test';
import {
        findAnagrams,
        findAnagrams1,
        findAnagrams2,
} from '../../../src/problems/0401-0500/0438_find-all-anagrams-in-a-string.js';

const testcases = [
        { s: 'cbaebabacd', p: 'abc', expected: [0, 6] },
        { s: 'abab', p: 'ab', expected: [0, 1, 2] },
        { s: 'baa', p: 'aa', expected: [1] },
];

describe('findAnagrams', () => {
        test.each(
                structuredClone(testcases),
        )('findAnagrams($s, $p) -> $expected', ({ s, p, expected }) => {
                expect(findAnagrams(s, p)).toStrictEqual(expected);
        });
});

describe('findAnagrams1', () => {
        test.each(
                structuredClone(testcases),
        )('findAnagrams1($s, $p) -> $expected', ({ s, p, expected }) => {
                expect(findAnagrams1(s, p)).toStrictEqual(expected);
        });
});

describe('findAnagrams2', () => {
        test.each(
                structuredClone(testcases),
        )('findAnagrams2($s, $p) -> $expected', ({ s, p, expected }) => {
                expect(findAnagrams2(s, p)).toStrictEqual(expected);
        });
});
