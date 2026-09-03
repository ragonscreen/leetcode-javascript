import { describe, expect, test } from 'bun:test';

import { removeDuplicateLetters } from '../../../src/problems/0301-0400/0316_remove-duplicate-letters.js';

const testcases = [
        { s: 'bcabc', expected: 'abc' },
        { s: 'cbacdcbc', expected: 'acdb' },
        { s: 'dcba', expected: 'dcba' },
];

describe('removeDuplicateLetters', () => {
        test.each(structuredClone(testcases))(
                'removeDuplicateLetters($s) -> $expected',
                ({ s, expected }) => {
                        expect(removeDuplicateLetters(s)).toStrictEqual(expected);
                },
        );
});
