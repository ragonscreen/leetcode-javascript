import { describe, expect, test } from 'bun:test';
import { decodeCiphertext } from '../../../src/problems/2001-2100/2075_decode-the-slanted-ciphertext.js';

const testcases = [
        { encodedText: 'ch   ie   pr', rows: 3, expected: 'cipher' },
        {
                encodedText: 'iveo    eed   l te   olc',
                rows: 4,
                expected: 'i love leetcode',
        },
        { encodedText: 'coding', rows: 1, expected: 'coding' },
        { encodedText: 'c   i   p', rows: 3, expected: 'cip' },
];

describe('decodeCiphertext', () => {
        test.each(
                structuredClone(testcases),
        )('decodeCiphertext($encodedText, $rows) -> $expected', ({
                encodedText,
                rows,
                expected,
        }) => {
                expect(decodeCiphertext(encodedText, rows)).toStrictEqual(
                        expected,
                );
        });
});
