import { describe, expect, test } from 'bun:test';
import { numberToWords } from '../../../src/problems/0201-0300/0273_integer-to-english-words.js';

const testcases = [
        { num: 123, expected: 'One Hundred Twenty Three' },
        { num: 12_345, expected: 'Twelve Thousand Three Hundred Forty Five' },
        {
                num: 1_234_567,
                expected: 'One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven',
        },
        { num: 0, expected: 'Zero' },
        { num: 1, expected: 'One' },
        {
                num: 2_000_000_200,
                expected: 'Two Billion Two Hundred',
        },
        {
                num: 2_000_100_000,
                expected: 'Two Billion One Hundred Thousand',
        },
        {
                num: 2_147_483_647,
                expected: 'Two Billion One Hundred Forty Seven Million Four Hundred Eighty Three Thousand Six Hundred Forty Seven',
        },
        {
                num: 12,
                expected: 'Twelve',
        },
        {
                num: 12_000,
                expected: 'Twelve Thousand',
        },
        {
                num: 10,
                expected: 'Ten',
        },
        {
                num: 20,
                expected: 'Twenty',
        },
        {
                num: 100,
                expected: 'One Hundred',
        },
        {
                num: 1001,
                expected: 'One Thousand One',
        },
        {
                num: 2_000_000_004,
                expected: 'Two Billion Four',
        },
        {
                num: 2_000_000_016,
                expected: 'Two Billion Sixteen',
        },
        {
                num: 1_000_000_010,
                expected: 'One Billion Ten',
        },
];

describe('numberToWords', () => {
        test.each(
                structuredClone(testcases),
        )('numberToWords($num) -> $expected', ({ num, expected }) => {
                expect(numberToWords(num)).toStrictEqual(expected);
        });
});
