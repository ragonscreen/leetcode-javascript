import { describe, expect, test } from 'bun:test';
import { isAnagram } from '../../../src/problems/0201-0300/0242_valid-anagram.js';

const testcases = [
        { s: 'anagram', t: 'nagaram', expected: true },
        { s: 'rat', t: 'car', expected: false },
];

describe('isAnagram', () => {
        test.each(
                structuredClone(testcases),
        )('isAnagram($s, $t) -> $expected', ({ s, t, expected }) => {
                expect(isAnagram(s, t)).toStrictEqual(expected);
        });
});
