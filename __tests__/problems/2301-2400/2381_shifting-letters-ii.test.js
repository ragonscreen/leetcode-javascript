import { describe, expect, test } from 'bun:test';
import { shiftingLetters } from '../../../src/problems/2301-2400/2381_shifting-letters-ii.js';

const testcases = [
        {
                s: 'abc',
                shifts: [
                        [0, 1, 0],
                        [1, 2, 1],
                        [0, 2, 1],
                ],
                expected: 'ace',
        },
        {
                s: 'dztz',
                shifts: [
                        [0, 0, 0],
                        [1, 1, 1],
                ],
                expected: 'catz',
        },
];

describe('shiftingLetters', () => {
        test.each(
                structuredClone(testcases),
        )('shiftingLetters($s, $shifts) -> $expected', ({
                s,
                shifts,
                expected,
        }) => {
                expect(shiftingLetters(s, shifts)).toStrictEqual(expected);
        });
});
