import { describe, expect, test } from 'bun:test';
import { findDifferentBinaryString } from '../../../src/problems/1901-2000/1980_find-unique-binary-string.js';

const testcases = [
        { nums: ['01', '10'], expected: ['00', '11'] },
        { nums: ['00', '01'], expected: ['10', '11'] },
        {
                nums: ['111', '011', '001'],
                expected: ['000', '010', '100', '101', '110'],
        },
        {
                nums: ['0000', '0111', '1111', '1010'],
                expected: [
                        '1000',
                        '1100',
                        '1110',
                        '1101',
                        '1011',
                        '1001',
                        '0100',
                        '0110',
                        '0101',
                        '0010',
                        '0011',
                        '0001',
                ],
        },
];

describe('findDifferentBinaryString', () => {
        test.each(
                structuredClone(testcases),
        )('findDifferentBinaryString($nums) -> $expected', ({
                nums,
                expected,
        }) => {
                expect(findDifferentBinaryString(nums)).toBeOneOf(expected);
        });
});
