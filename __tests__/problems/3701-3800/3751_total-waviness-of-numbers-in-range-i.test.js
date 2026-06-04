import { describe, expect, test } from 'bun:test';
import {
        totalWaviness,
        totalWaviness1,
} from '../../../src/problems/3701-3800/3751_total-waviness-of-numbers-in-range-i.js';

const testcases = [
        { num1: 120, num2: 130, expected: 3 },
        { num1: 198, num2: 202, expected: 3 },
        { num1: 4848, num2: 4848, expected: 2 },
];

describe('totalWaviness', () => {
        test.each(
                structuredClone(testcases),
        )('totalWaviness($num1, $num2) -> $expected', ({
                num1,
                num2,
                expected,
        }) => {
                expect(totalWaviness(num1, num2)).toStrictEqual(expected);
        });
});

describe('totalWaviness1', () => {
        test.each(
                structuredClone(testcases),
        )('totalWaviness1($num1, $num2) -> $expected', ({
                num1,
                num2,
                expected,
        }) => {
                expect(totalWaviness1(num1, num2)).toStrictEqual(expected);
        });
});
