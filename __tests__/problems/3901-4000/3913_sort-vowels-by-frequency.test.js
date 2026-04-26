import { describe, expect, test } from 'bun:test';
import { sortVowels } from '../../../src/problems/3901-4000/3913_sort-vowels-by-frequency.js';

const testcases = [
        { s: 'leetcode', expected: 'leetcedo' },
        { s: 'aeiaaioooa', expected: 'aaaaoooiie' },
        { s: 'baeiou', expected: 'baeiou' },
        { s: 'accooauuu', expected: 'uccuuaaoo' },
];

describe('sortVowels', () => {
        test.each(structuredClone(testcases))('sortVowels($s) -> $expected', ({
                s,
                expected,
        }) => {
                expect(sortVowels(s)).toStrictEqual(expected);
        });
});
