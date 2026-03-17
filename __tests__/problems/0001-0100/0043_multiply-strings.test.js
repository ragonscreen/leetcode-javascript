import { describe, expect, test } from 'bun:test';
import { multiply } from '../../../src/problems/0001-0100/0043_multiply-strings.js';

const testcases = [
        { num1: '2', num2: '3', expected: '6' },
        { num1: '123', num2: '456', expected: '56088' },
];

describe('multiply', () => {
        test.each(
                structuredClone(testcases),
        )('multiply($num1, $num2) -> $expected', ({ num1, num2, expected }) => {
                expect(multiply(num1, num2)).toStrictEqual(expected);
        });
});
