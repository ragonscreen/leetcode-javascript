import { describe, expect, test } from 'bun:test';

import {
        removeInvalidParentheses,
        removeInvalidParentheses1,
} from './0301_remove-invalid-parentheses.js';

const testcases = [
        { s: '()())()', expected: ['(())()', '()()()'] },
        { s: '(a)())()', expected: ['(a())()', '(a)()()'] },
        { s: ')(', expected: [''] },
        { s: '()', expected: ['()'] },
        { s: '(a)', expected: ['(a)'] },
        { s: '(a)()(())', expected: ['(a)()(())'] },
        // disabled for test performance
        // { s: '((((((((((((((((((aaaaa))', expected: ['((aaaaa))'] },
];

describe('removeInvalidParentheses', () => {
        test.each(structuredClone(testcases))(
                'removeInvalidParentheses($s) -> $expected',
                ({ s, expected }) => {
                        expect(removeInvalidParentheses(s)).toContainAllValues(expected);
                },
        );
});

describe('removeInvalidParentheses1', () => {
        test.each(structuredClone(testcases))(
                'removeInvalidParentheses1($s) -> $expected',
                ({ s, expected }) => {
                        expect(removeInvalidParentheses1(s)).toContainAllValues(expected);
                },
        );
});
