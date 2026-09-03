import { describe, expect, test } from 'bun:test';

import { shortestBeautifulSubstring } from '../../../src/problems/2901-3000/2904_shortest-and-lexicographically-smallest-beautiful-string.js';

const testcases = [
        { s: '100011001', k: 3, expected: '11001' },
        { s: '1011', k: 2, expected: '11' },
        { s: '000', k: 1, expected: '' },
        { s: '111111', k: 6, expected: '111111' },
        { s: '111111', k: 5, expected: '11111' },
        { s: '01011101000111110', k: 5, expected: '11111' },
        { s: '001', k: 1, expected: '1' },
        { s: '1100100101011001001', k: 7, expected: '1100100101011' },
];

describe('shortestBeautifulSubstring', () => {
        test.each(structuredClone(testcases))(
                'shortestBeautifulSubstring($s, $k) -> $expected',
                ({ s, k, expected }) => {
                        expect(shortestBeautifulSubstring(s, k)).toStrictEqual(expected);
                },
        );
});
