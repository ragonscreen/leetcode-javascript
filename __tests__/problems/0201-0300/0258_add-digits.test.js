import { describe, expect, test } from 'bun:test';
import { addDigits } from '../../../src/problems/0201-0300/0258_add-digits.js';

const testcases = [
        { num: 38, expected: 2 },
        { num: 0, expected: 0 },
        { num: 9, expected: 9 },
];

describe('addDigits', () => {
        test.each(structuredClone(testcases))('addDigits($num) -> $expected', ({
                num,
                expected,
        }) => {
                expect(addDigits(num)).toStrictEqual(expected);
        });
});
