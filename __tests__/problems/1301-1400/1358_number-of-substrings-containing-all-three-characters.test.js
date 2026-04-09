import { describe, expect, test } from 'bun:test';
import { numberOfSubstrings } from '../../../src/problems/1301-1400/1358_number-of-substrings-containing-all-three-characters.js';

const testcases = [
        { s: 'abcabc', expected: 10 },
        { s: 'aaacb', expected: 3 },
        { s: 'abc', expected: 1 },
        { s: 'ababbbc', expected: 3 },
];

describe('numberOfSubstrings', () => {
        test.each(
                structuredClone(testcases),
        )('numberOfSubstrings($s) -> $expected', ({ s, expected }) => {
                expect(numberOfSubstrings(s)).toStrictEqual(expected);
        });
});
