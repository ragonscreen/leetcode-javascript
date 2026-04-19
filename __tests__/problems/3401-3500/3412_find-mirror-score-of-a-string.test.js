import { describe, expect, test } from 'bun:test';
import { calculateScore } from '../../../src/problems/3401-3500/3412_find-mirror-score-of-a-string.js';

const testcases = [
        { s: 'aczzx', expected: 5 },
        { s: 'abcdef', expected: 0 },
        { s: 'eockppxdqclkhjgvnw', expected: 50 },
];

describe('calculateScore', () => {
        test.each(
                structuredClone(testcases),
        )('calculateScore($s) -> $expected', ({ s, expected }) => {
                expect(calculateScore(s)).toStrictEqual(expected);
        });
});
