import { describe, expect, test } from 'bun:test';
import {
        finalString,
        finalString1,
} from '../../../src/problems/2801-2900/2810_faulty-keyboard.js';

const testcases = [
        { s: 'string', expected: 'rtsng' },
        { s: 'poiinter', expected: 'ponter' },
        { s: 'poiinterii', expected: 'ponter' },
        { s: 'poiinteri', expected: 'retnop' },
        { s: 'pointeri', expected: 'retnpo' },
];

describe('finalString', () => {
        test.each(structuredClone(testcases))('finalString($s) -> $expected', ({
                s,
                expected,
        }) => {
                expect(finalString(s)).toStrictEqual(expected);
        });
});

describe('finalString1', () => {
        test.each(
                structuredClone(testcases),
        )('finalString1($s) -> $expected', ({ s, expected }) => {
                expect(finalString1(s)).toStrictEqual(expected);
        });
});
