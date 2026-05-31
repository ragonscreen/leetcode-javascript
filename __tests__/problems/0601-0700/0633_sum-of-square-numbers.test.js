import { describe, expect, test } from 'bun:test';
import {
        judgeSquareSum,
        judgeSquareSum1,
        judgeSquareSum2,
        judgeSquareSum3,
} from '../../../src/problems/0601-0700/0633_sum-of-square-numbers.js';

const testcases = [
        { c: 5, expected: true },
        { c: 3, expected: false },
        { c: 4, expected: true },
        { c: 1, expected: true },
        { c: 0, expected: true },
        { c: 1000, expected: true },
];

describe('judgeSquareSum', () => {
        test.each(
                structuredClone(testcases),
        )('judgeSquareSum($c) -> $expected', ({ c, expected }) => {
                expect(judgeSquareSum(c)).toStrictEqual(expected);
        });
});

describe('judgeSquareSum1', () => {
        test.each(
                structuredClone(testcases),
        )('judgeSquareSum1($c) -> $expected', ({ c, expected }) => {
                expect(judgeSquareSum1(c)).toStrictEqual(expected);
        });
});

describe('judgeSquareSum2', () => {
        test.each(
                structuredClone(testcases),
        )('judgeSquareSum2($c) -> $expected', ({ c, expected }) => {
                expect(judgeSquareSum2(c)).toStrictEqual(expected);
        });
});

describe('judgeSquareSum3', () => {
        test.each(
                structuredClone(testcases),
        )('judgeSquareSum3($c) -> $expected', ({ c, expected }) => {
                expect(judgeSquareSum3(c)).toStrictEqual(expected);
        });
});
