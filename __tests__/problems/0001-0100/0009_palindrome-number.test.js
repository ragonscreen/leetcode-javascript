import { describe, expect, test } from 'bun:test';
import { isPalindrome } from '../../../src/problems/0001-0100/0009_palindrome-number.js';

const testcases = [
        { x: 121, expected: true },
        { x: -121, expected: false },
        { x: 10, expected: false },
];

describe('isPalindrome', () => {
        test.each(
                structuredClone(testcases),
        )('isPalindrome($x) -> $expected', ({ x, expected }) => {
                expect(isPalindrome(x)).toStrictEqual(expected);
        });
});
