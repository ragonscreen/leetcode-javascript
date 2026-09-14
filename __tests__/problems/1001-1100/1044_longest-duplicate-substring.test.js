import { describe, expect, test } from 'bun:test';

import { longestDupSubstring } from '../../../src/problems/1001-1100/1044_longest-duplicate-substring.js';

const testcases = [
        { s: 'banana', expected: 'ana' },
        { s: 'abcd', expected: '' },
        { s: 'baxyzba', expected: 'ba' },
        { s: 'aba', expected: 'a' },
];

describe('longestDupSubstring', () => {
        test.each(structuredClone(testcases))(
                'longestDupSubstring($s) -> $expected',
                ({ s, expected }) => {
                        expect(longestDupSubstring(s)).toStrictEqual(expected);
                },
        );
});
