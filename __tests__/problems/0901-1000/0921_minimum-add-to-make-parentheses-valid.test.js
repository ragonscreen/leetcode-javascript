import { describe, expect, test } from 'bun:test';
import { minAddToMakeValid } from '../../../src/problems/0901-1000/0921_minimum-add-to-make-parentheses-valid.js';

const testcases = [
        { s: '())', expected: 1 },
        { s: '(((', expected: 3 },
];

describe('minAddToMakeValid', () => {
        test.each(
                structuredClone(testcases),
        )('minAddToMakeValid($s) -> $expected', ({ s, expected }) => {
                expect(minAddToMakeValid(s)).toStrictEqual(expected);
        });
});
