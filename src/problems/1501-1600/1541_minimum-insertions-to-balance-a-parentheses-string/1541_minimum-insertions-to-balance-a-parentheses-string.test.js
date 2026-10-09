import { describe, expect, test } from 'bun:test';

import {
        minInsertions,
        minInsertions1,
} from './1541_minimum-insertions-to-balance-a-parentheses-string.js';

const testcases = [
        { s: '(()))', expected: 1 },
        { s: '())', expected: 0 },
        { s: '))())(', expected: 3 },
        { s: ')))', expected: 3 },
        { s: '(((()(()((())))(((()())))()())))(((()(()()((()()))', expected: 31 },
        { s: '(()))(()))()())))', expected: 4 },
];

describe('minInsertions', () => {
        test.each(structuredClone(testcases))(
                'minInsertions($s) -> $expected',
                ({ s, expected }) => {
                        expect(minInsertions(s)).toStrictEqual(expected);
                },
        );
});

describe('minInsertions1', () => {
        test.each(structuredClone(testcases))(
                'minInsertions1($s) -> $expected',
                ({ s, expected }) => {
                        expect(minInsertions1(s)).toStrictEqual(expected);
                },
        );
});
