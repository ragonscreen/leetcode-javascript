import { describe, expect, test } from 'bun:test';
import { validPalindrome } from '../../../src/problems/0601-0700/0680_valid-palindrome-ii.js';

const testcases = [
        { s: 'aba', expected: true },
        { s: 'abca', expected: true },
        { s: 'abc', expected: false },
        {
                s: 'aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga',
                expected: true,
        },
        { s: 'bccc', expected: true },
        { s: 'cccb', expected: true },
        { s: 'axboocya', expected: false },
        { s: 'lacapaxapacl', expected: true },
];

describe('validPalindrome', () => {
        test.each(
                structuredClone(testcases),
        )('validPalindrome($s) -> $expected', ({ s, expected }) => {
                expect(validPalindrome(s)).toStrictEqual(expected);
        });
});
