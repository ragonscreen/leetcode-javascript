import { describe, expect, test } from 'bun:test';
import { intToRoman } from '../../../src/problems/0001-0100/0012_integer-to-roman.js';

const testcases = [
        { num: 3749, expected: 'MMMDCCXLIX' },
        { num: 58, expected: 'LVIII' },
        { num: 1994, expected: 'MCMXCIV' },
];

describe('intToRoman', () => {
        test.each(
                structuredClone(testcases),
        )('intToRoman($num) -> $expected', ({ num, expected }) => {
                expect(intToRoman(num)).toStrictEqual(expected);
        });
});
