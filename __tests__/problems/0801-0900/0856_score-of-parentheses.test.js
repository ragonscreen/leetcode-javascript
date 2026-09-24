import { describe, expect, test } from 'bun:test';

import { scoreOfParentheses } from '../../../src/problems/0801-0900/0856_score-of-parentheses.js';

const testcases = [
        { s: '()', expected: 1 },
        { s: '(())', expected: 2 },
        { s: '()()', expected: 2 },
        { s: '((()))', expected: 4 },
        { s: '((((((((((((((((((((((((()))))))))))))))))))))))))', expected: 16_777_216 },
];

describe('scoreOfParentheses', () => {
        test.each(structuredClone(testcases))(
                'scoreOfParentheses($s) -> $expected',
                ({ s, expected }) => {
                        expect(scoreOfParentheses(s)).toStrictEqual(expected);
                },
        );
});
