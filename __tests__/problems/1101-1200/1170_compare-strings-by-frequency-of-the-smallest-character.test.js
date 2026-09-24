import { describe, expect, test } from 'bun:test';

import { numSmallerByFrequency } from '../../../src/problems/1101-1200/1170_compare-strings-by-frequency-of-the-smallest-character.js';

const testcases = [
        { queries: ['cbd'], words: ['zaaaz'], expected: [1] },
        { queries: ['bbb', 'cc'], words: ['a', 'aa', 'aaa', 'aaaa'], expected: [1, 2] },
        {
                queries: [
                        'bba',
                        'abaaaaaa',
                        'aaaaaa',
                        'bbabbabaab',
                        'aba',
                        'aa',
                        'baab',
                        'bbbbbb',
                        'aab',
                        'bbabbaabb',
                ],
                words: [
                        'aaabbb',
                        'aab',
                        'babbab',
                        'babbbb',
                        'b',
                        'bbbbbbbbab',
                        'a',
                        'bbbbbbbbbb',
                        'baaabbaab',
                        'aa',
                ],
                expected: [6, 1, 1, 2, 3, 3, 3, 1, 3, 2],
        },
];

describe('numSmallerByFrequency', () => {
        test.each(structuredClone(testcases))(
                'numSmallerByFrequency($queries, $words) -> $expected',
                ({ queries, words, expected }) => {
                        expect([...numSmallerByFrequency(queries, words)]).toStrictEqual(expected);
                },
        );
});
