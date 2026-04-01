import { describe, expect, test } from 'bun:test';
import { mySqrt, mySqrt1 } from '../../../src/problems/0001-0100/0069_sqrtx.js';

const testcases = [
        { x: 4, expected: 2 },
        { x: 8, expected: 2 },
        { x: 21, expected: 4 },
        { x: 100, expected: 10 },
        { x: 0, expected: 0 },
        { x: 1456, expected: 38 },
        { x: 1444, expected: 38 },
        { x: 18_000, expected: 134 },
];

describe('mySqrt', () => {
        test.each(structuredClone(testcases))('mySqrt($x) -> $expected', ({
                x,
                expected,
        }) => {
                expect(mySqrt(x)).toStrictEqual(expected);
        });
});

describe('mySqrt1', () => {
        test.each(structuredClone(testcases))('mySqrt1($x) -> $expected', ({
                x,
                expected,
        }) => {
                expect(mySqrt1(x)).toStrictEqual(expected);
        });
});
