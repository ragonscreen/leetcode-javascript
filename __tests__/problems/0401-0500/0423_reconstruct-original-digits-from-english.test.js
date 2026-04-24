import { describe, expect, test } from 'bun:test';
import { originalDigits } from '../../../src/problems/0401-0500/0423_reconstruct-original-digits-from-english.js';

const testcases = [
        { s: 'owoztneoer', expected: '012' },
        { s: 'fviefuro', expected: '45' },
        {
                s: 'zeroonetwothreefourfivesixseveneightnine',
                expected: '0123456789',
        },
];

describe('originalDigits', () => {
        test.each(
                structuredClone(testcases),
        )('originalDigits($s) -> $expected', ({ s, expected }) => {
                expect(originalDigits(s)).toStrictEqual(expected);
        });
});
