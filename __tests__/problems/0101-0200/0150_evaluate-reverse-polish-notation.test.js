import { describe, expect, test } from 'bun:test';
import { evalRPN } from '../../../src/problems/0101-0200/0150_evaluate-reverse-polish-notation.js';

const testcases = [
        { tokens: ['2', '1', '+', '3', '*'], expected: 9 },
        { tokens: ['4', '13', '5', '/', '+'], expected: 6 },
        {
                tokens: [
                        '10',
                        '6',
                        '9',
                        '3',
                        '+',
                        '-11',
                        '*',
                        '/',
                        '*',
                        '17',
                        '+',
                        '5',
                        '+',
                ],
                expected: 22,
        },
];

describe('evalRPN', () => {
        test.each(
                structuredClone(testcases),
        )('evalRPN($tokens) -> $expected', ({ tokens, expected }) => {
                expect(evalRPN(tokens)).toStrictEqual(expected);
        });
});
