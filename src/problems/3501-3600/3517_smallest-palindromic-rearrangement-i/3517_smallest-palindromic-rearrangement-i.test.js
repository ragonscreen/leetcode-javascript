import { describe, expect, test } from 'bun:test';

import { smallestPalindrome } from './3517_smallest-palindromic-rearrangement-i.js';

const testcases = [
        { s: 'z', expected: 'z' },
        { s: 'babab', expected: 'abbba' },
        { s: 'daccad', expected: 'acddca' },
];

describe('smallestPalindrome', () => {
        test.each(structuredClone(testcases))(
                'smallestPalindrome($s) -> $expected',
                ({ s, expected }) => {
                        expect(smallestPalindrome(s)).toStrictEqual(expected);
                },
        );
});
