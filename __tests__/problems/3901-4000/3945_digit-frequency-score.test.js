import { describe, expect, test } from 'bun:test';
import { digitFrequencyScore } from '../../../src/problems/3901-4000/3945_digit-frequency-score.js';

const testcases = [
        { n: 122, expected: 5 },
        { n: 101, expected: 2 },
];

describe('digitFrequencyScore', () => {
        test.each(
                structuredClone(testcases),
        )('digitFrequencyScore($n) -> $expected', ({ n, expected }) => {
                expect(digitFrequencyScore(n)).toStrictEqual(expected);
        });
});
