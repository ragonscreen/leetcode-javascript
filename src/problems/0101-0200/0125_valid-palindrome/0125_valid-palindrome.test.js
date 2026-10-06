import { describe, expect, test } from 'bun:test';

import { isPalindrome } from './0125_valid-palindrome.js';

const testcases = [
        { s: 'A man, a plan, a canal: Panama', expected: true },
        { s: 'race a car', expected: false },
        { s: ' ', expected: true },
];

describe('isPalindrome', () => {
        test.each(structuredClone(testcases))(
                'isPalindrome($s) -> $expected',
                ({ s, expected }) => {
                        expect(isPalindrome(s)).toStrictEqual(expected);
                },
        );
});
