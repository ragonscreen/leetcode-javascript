import { describe, expect, test } from 'bun:test';
import {
        reverse,
        reverse1,
} from '../../../src/problems/0001-0100/0007_reverse-integer.js';

const testcases = [
        { x: 123, expected: 321 },
        { x: -123, expected: -321 },
        { x: 120, expected: 21 },
        { x: 2_147_483_647, expected: 0 },
        { x: -2_147_483_647, expected: 0 },
];

describe('reverse', () => {
        test.each(structuredClone(testcases))('reverse($x) -> $expected', ({
                x,
                expected,
        }) => {
                expect(reverse(x)).toStrictEqual(expected);
        });
});

describe('reverse1', () => {
        test.each(structuredClone(testcases))('reverse1($x) -> $expected', ({
                x,
                expected,
        }) => {
                expect(reverse1(x)).toStrictEqual(expected);
        });
});
