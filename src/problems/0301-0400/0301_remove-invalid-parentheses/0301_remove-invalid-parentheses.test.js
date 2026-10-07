import { describe, expect, test } from 'bun:test';

import {
        removeInvalidParentheses,
        removeInvalidParentheses1,
        removeInvalidParentheses2,
} from './0301_remove-invalid-parentheses.js';

const testcases = [
        { s: '()())()', expected: ['(())()', '()()()'] },
        { s: '(a)())()', expected: ['(a())()', '(a)()()'] },
        { s: ')(', expected: [''] },
        { s: '()', expected: ['()'] },
        { s: '(a)', expected: ['(a)'] },
        { s: '(a)()(())', expected: ['(a)()(())'] },
        { s: '))', expected: [''] },
        { s: ')d))', expected: ['d'] },
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

describe('removeInvalidParentheses2', () => {
        test.each(structuredClone(testcases))(
                'removeInvalidParentheses2($s) -> $expected',
                ({ s, expected }) => {
                        expect(removeInvalidParentheses2(s)).toContainAllValues(expected);
                },
        );
});
