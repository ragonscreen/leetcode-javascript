import { describe, expect, test } from 'bun:test';
import { mapWordWeights } from '../../../src/problems/3801-3900/3838_weighted-word-mapping.js';

const testcases = [
        {
                words: ['abcd', 'def', 'xyz'],
                weights: [
                        5, 3, 12, 14, 1, 2, 3, 2, 10, 6, 6, 9, 7, 8, 7, 10, 8,
                        9, 6, 9, 9, 8, 3, 7, 7, 2,
                ],
                expected: 'rij',
        },
        {
                words: ['a', 'b', 'c'],
                weights: [
                        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                        1, 1, 1, 1, 1, 1, 1,
                ],
                expected: 'yyy',
        },
        {
                words: ['abcd'],
                weights: [
                        7, 5, 3, 4, 3, 5, 4, 9, 4, 2, 2, 7, 10, 2, 5, 10, 6, 1,
                        2, 2, 4, 1, 3, 4, 4, 5,
                ],
                expected: 'g',
        },
];

describe('mapWordWeights', () => {
        test.each(
                structuredClone(testcases),
        )('mapWordWeights($words, $weights) -> $expected', ({
                words,
                weights,
                expected,
        }) => {
                expect(mapWordWeights(words, weights)).toStrictEqual(expected);
        });
});
