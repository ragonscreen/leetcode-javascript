import { describe, expect, test } from 'bun:test';
import { numKLenSubstrNoRepeats } from '../../../src/problems/1101-1200/1100_find-k-length-substrings-with-no-repeated-characters.js';

const testcases = [
        { s: 'havefunonleetcode', k: 5, expected: 6 },
        { s: 'home', k: 5, expected: 0 },
];

describe('numKLenSubstrNoRepeats', () => {
        test.each(
                structuredClone(testcases),
        )('numKLenSubstrNoRepeats($s, $k) -> $expected', ({
                s,
                k,
                expected,
        }) => {
                expect(numKLenSubstrNoRepeats(s, k)).toStrictEqual(expected);
        });
});
