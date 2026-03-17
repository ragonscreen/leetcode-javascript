import { describe, expect, test } from 'bun:test';
import { reverseParentheses } from '../../../src/problems/1101-1200/1190_reverse-substrings-between-each-pair-of-parentheses.js';

const testcases = [
        { s: '(abcd)', expected: 'dcba' },
        { s: '(u(love)i)', expected: 'iloveu' },
        { s: '(ed(et(oc))el)', expected: 'leetcode' },
        { s: '(a)(bc(def)ghi)(j)', expected: 'aihgdefcbj' },
        { s: 'abcd', expected: 'abcd' },
        { s: 'ab(c)(de)f', expected: 'abcedf' },
        { s: 'y(ab(cd(ef)g)hi)j(kl)', expected: 'yihcdfegbajlk' },
        { s: 'ab(cd(ef)g(hi)jk)lm', expected: 'abkjhigefdclm' },
];

describe('reverseParentheses', () => {
        test.each(
                structuredClone(testcases),
        )('reverseParentheses($s) -> $expected', ({ s, expected }) => {
                expect(reverseParentheses(s)).toStrictEqual(expected);
        });
});
