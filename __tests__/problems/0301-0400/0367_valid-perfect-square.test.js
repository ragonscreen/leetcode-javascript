import { describe, expect, test } from 'bun:test';
import { isPerfectSquare } from '../../../src/problems/0301-0400/0367_valid-perfect-square.js';

const testcases = [
        { num: 16, expected: true },
        { num: 14, expected: false },
        { num: 1, expected: true },
];

describe('isPerfectSquare', () => {
        test.each(
                structuredClone(testcases),
        )('isPerfectSquare($num) -> $expected', ({ num, expected }) => {
                expect(isPerfectSquare(num)).toStrictEqual(expected);
        });
});
