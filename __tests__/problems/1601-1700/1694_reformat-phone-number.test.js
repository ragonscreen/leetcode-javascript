import { describe, expect, test } from 'bun:test';
import { reformatNumber } from '../../../src/problems/1601-1700/1694_reformat-phone-number.js';

const testcases = [
        { number: '1-23-45 6', expected: '123-456' },
        { number: '123 4-567', expected: '123-45-67' },
        { number: '123 4-5678', expected: '123-456-78' },
        { number: '06-005523 01', expected: '060-055-23-01' },
];

describe('reformatNumber', () => {
        test.each(
                structuredClone(testcases),
        )('reformatNumber($number) -> $expected', ({ number, expected }) => {
                expect(reformatNumber(number)).toStrictEqual(expected);
        });
});
