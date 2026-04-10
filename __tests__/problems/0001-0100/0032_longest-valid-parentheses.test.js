import { describe, expect, test } from 'bun:test';
import { longestValidParentheses } from '../../../src/problems/0001-0100/0032_longest-valid-parentheses.js';

const testcases = [
        { s: '(()', expected: 2 },
        { s: ')()())', expected: 4 },
        { s: '', expected: 0 },
        { s: '()', expected: 2 },
];

describe('longestValidParentheses', () => {
        test.each(
                structuredClone(testcases),
        )('longestValidParentheses($s) -> $expected', ({ s, expected }) => {
                expect(longestValidParentheses(s)).toStrictEqual(expected);
        });
});
