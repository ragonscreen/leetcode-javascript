import { describe, expect, test } from 'bun:test';
import { parseBoolExpr } from '../../../src/problems/1101-1200/1106_parsing-a-boolean-expression.js';

const testcases = [
        { expression: '&(|(f))', expected: false },
        { expression: '|(f,f,f,t)', expected: true },
        { expression: '!(&(f,t))', expected: true },
        { expression: '!(!(f))', expected: false },
        { expression: 'f', expected: false },
        { expression: '|(&(t,f,t),!(t))', expected: false },
];

describe('parseBoolExpr', () => {
        test.each(
                structuredClone(testcases),
        )('parseBoolExpr($expression) -> $expected', ({
                expression,
                expected,
        }) => {
                expect(parseBoolExpr(expression)).toStrictEqual(expected);
        });
});
