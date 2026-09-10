import { describe, expect, test } from 'bun:test';

import { divisibilityArray } from '../../../src/problems/2501-2600/2575_find-the-divisibility-array-of-a-string.js';

const testcases = [
        { word: '998244353', m: 3, expected: [1, 1, 0, 0, 0, 1, 1, 0, 0] },
        { word: '1010', m: 10, expected: [0, 1, 0, 1] },
        { word: '864816412710', m: 1, expected: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
        { word: '864816412710', m: 2, expected: [1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1] },
        { word: '864816412710', m: 5, expected: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] },
        { word: '864816412710', m: 10, expected: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] },
        { word: '864816412710', m: 3, expected: [0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1] },
        {
                word: '864816412710864816412710',
                m: 13,
                expected: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        },
];

describe('divisibilityArray', () => {
        test.each(structuredClone(testcases))(
                'divisibilityArray($word, $m) -> $expected',
                ({ word, m, expected }) => {
                        expect([...divisibilityArray(word, m)]).toStrictEqual(expected);
                },
        );
});
