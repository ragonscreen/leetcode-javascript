import { describe, expect, test } from 'bun:test';
import { lengthOfLongestSubstringTwoDistinct } from '../../../src/problems/0101-0200/0159_longest-substring-with-at-most-two-distinct-characters.js';

const testcases = [
        { s: 'eceba', expected: 3 },
        { s: 'ccaabbb', expected: 5 },
];

describe('lengthOfLongestSubstringTwoDistinct', () => {
        test.each(
                structuredClone(testcases),
        )('lengthOfLongestSubstringTwoDistinct($s) -> $expected', ({
                s,
                expected,
        }) => {
                expect(lengthOfLongestSubstringTwoDistinct(s)).toStrictEqual(
                        expected,
                );
        });
});
