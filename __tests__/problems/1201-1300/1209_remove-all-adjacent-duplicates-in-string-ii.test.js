import { describe, expect, test } from 'bun:test';
import { removeDuplicates } from '../../../src/problems/1201-1300/1209_remove-all-adjacent-duplicates-in-string-ii.js';

const testcases = [
        { s: 'abcd', k: 2, expected: 'abcd' },
        { s: 'deeedbbcccbdaa', k: 3, expected: 'aa' },
        { s: 'pbbcggttciiippooaais', k: 2, expected: 'ps' },
];

describe('removeDuplicates', () => {
        test.each(
                structuredClone(testcases),
        )('removeDuplicates($s, $k) -> $expected', ({ s, k, expected }) => {
                expect(removeDuplicates(s, k)).toStrictEqual(expected);
        });
});
