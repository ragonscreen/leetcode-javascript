import { describe, expect, test } from 'bun:test';
import { checkIfCanBreak } from '../../../src/problems/1401-1500/1433_check-if-a-string-can-break-another-string.js';

const testcases = [
        { s1: 'abc', s2: 'xya', expected: true },
        { s1: 'abe', s2: 'acd', expected: false },
        { s1: 'leetcodee', s2: 'interview', expected: true },
        { s1: 'yopumzgd', s2: 'pamntyya', expected: true },
];

describe('checkIfCanBreak', () => {
        test.each(
                structuredClone(testcases),
        )('checkIfCanBreak($s1, $s2) -> $expected', ({ s1, s2, expected }) => {
                expect(checkIfCanBreak(s1, s2)).toStrictEqual(expected);
        });
});
