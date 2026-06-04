import { describe, expect, test } from 'bun:test';
import {
        numSquares,
        numSquares1,
} from '../../../src/problems/0201-0300/0279_perfect-squares.js';

const testcases = [
        { n: 12, expected: 3 },
        { n: 13, expected: 2 },
        { n: 16, expected: 1 },
];

describe('numSquares', () => {
        test.each(structuredClone(testcases))('numSquares($n) -> $expected', ({
                n,
                expected,
        }) => {
                expect(numSquares(n)).toStrictEqual(expected);
        });
});

describe('numSquares1', () => {
        test.each(structuredClone(testcases))('numSquares1($n) -> $expected', ({
                n,
                expected,
        }) => {
                expect(numSquares1(n)).toStrictEqual(expected);
        });
});
