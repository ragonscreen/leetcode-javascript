import { describe, expect, test } from 'bun:test';
import { lengthOfLongestSubstringKDistinct } from '../../../src/problems/0301-0400/0340_longest-substring-with-at-most-k-distinct-characters.js';

const testcases = [
        { s: 'eceba', k: 2, expected: 3 },
        { s: 'aa', k: 1, expected: 2 },
];

describe('lengthOfLongestSubstringKDistinct', () => {
        test.each(
                structuredClone(testcases),
        )('lengthOfLongestSubstringKDistinct($s, $k) -> $expected', ({
                s,
                k,
                expected,
        }) => {
                expect(lengthOfLongestSubstringKDistinct(s, k)).toStrictEqual(
                        expected,
                );
        });
});
