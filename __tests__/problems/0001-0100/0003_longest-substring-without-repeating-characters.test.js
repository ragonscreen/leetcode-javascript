import { describe, expect, test } from 'bun:test';
import { lengthOfLongestSubstring } from '../../../src/problems/0001-0100/0003_longest-substring-without-repeating-characters.js';

const testcases = [
        { s: 'abcabcbb', expected: 3 },
        { s: 'bbbbb', expected: 1 },
        { s: 'pwwkew', expected: 3 },
        { s: ' ', expected: 1 },
];

describe('lengthOfLongestSubstring', () => {
        test.each(
                structuredClone(testcases),
        )('lengthOfLongestSubstring($s) -> $expected', ({ s, expected }) => {
                expect(lengthOfLongestSubstring(s)).toStrictEqual(expected);
        });
});
