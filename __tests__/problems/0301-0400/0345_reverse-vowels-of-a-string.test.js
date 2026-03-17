import { describe, expect, test } from 'bun:test';
import { reverseVowels } from '../../../src/problems/0301-0400/0345_reverse-vowels-of-a-string.js';

const testcases = [
        { s: 'IceCreAm', expected: 'AceCreIm' },
        { s: 'leetcode', expected: 'leotcede' },
];

describe('reverseVowels', () => {
        test.each(
                structuredClone(testcases),
        )('reverseVowels($s) -> $expected', ({ s, expected }) => {
                expect(reverseVowels(s)).toStrictEqual(expected);
        });
});
