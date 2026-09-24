import { describe, expect, test } from 'bun:test';

import { checkPalindromeFormation } from '../../../src/problems/1601-1700/1616_split-two-strings-to-make-palindrome.js';

const testcases = [
        { a: 'x', b: 'y', expected: true },
        { a: 'xbdef', b: 'xecab', expected: false },
        { a: 'ulacfd', b: 'jizalu', expected: true },
        { a: 'xx', b: 'yy', expected: true },
        { a: 'xx', b: 'ab', expected: true },
        { a: 'pvhmupgqeltozftlmfjjde', b: 'yjgpzbezspnnpszebzmhvp', expected: true },
        {
                a: 'aejbaalflrmkswrydwdkdwdyrwskmrlfqizjezd',
                b: 'uvebspqckawkhbrtlqwblfwzfptanhiglaabjea',
                expected: true,
        },
        {
                a: 'abda',
                b: 'acmc',
                expected: false,
        },
];

describe('checkPalindromeFormation', () => {
        test.each(structuredClone(testcases))(
                'checkPalindromeFormation($a, $b) -> $expected',
                ({ a, b, expected }) => {
                        expect(checkPalindromeFormation(a, b)).toStrictEqual(expected);
                },
        );
});
