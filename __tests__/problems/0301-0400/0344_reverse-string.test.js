import { describe, expect, test } from 'bun:test';
import { reverseString } from '../../../src/problems/0301-0400/0344_reverse-string.js';

const testcases = [
        { s: ['h', 'e', 'l', 'l', 'o'], expected: ['o', 'l', 'l', 'e', 'h'] },
        {
                s: ['H', 'a', 'n', 'n', 'a', 'h'],
                expected: ['h', 'a', 'n', 'n', 'a', 'H'],
        },
];

describe('reverseString', () => {
        test.each(
                structuredClone(testcases),
        )('reverseString($s) -> $expected', ({ s, expected }) => {
                expect(reverseString(s)).toBeNil();
                expect(s).toStrictEqual(expected);
        });
});
