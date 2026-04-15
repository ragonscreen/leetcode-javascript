import { describe, expect, test } from 'bun:test';
import { letterCombinations } from '../../../src/problems/0001-0100/0017_letter-combinations-of-a-phone-number.js';

const testcases = [
        {
                digits: '23',
                expected: [
                        'ad',
                        'ae',
                        'af',
                        'bd',
                        'be',
                        'bf',
                        'cd',
                        'ce',
                        'cf',
                ],
        },
        { digits: '2', expected: ['a', 'b', 'c'] },
];

describe('letterCombinations', () => {
        test.each(
                structuredClone(testcases),
        )('letterCombinations($digits) -> $expected', ({
                digits,
                expected,
        }) => {
                expect(letterCombinations(digits)).toContainAllValues(expected);
        });
});
