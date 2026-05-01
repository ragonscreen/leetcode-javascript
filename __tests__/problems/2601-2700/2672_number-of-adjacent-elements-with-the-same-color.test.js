import { describe, expect, test } from 'bun:test';
import { colorTheArray } from '../../../src/problems/2601-2700/2672_number-of-adjacent-elements-with-the-same-color.js';

const testcases = [
        {
                n: 4,
                queries: [
                        [0, 2],
                        [1, 2],
                        [3, 1],
                        [1, 1],
                        [2, 1],
                ],
                expected: [0, 1, 1, 0, 2],
        },
        { n: 1, queries: [[0, 100_000]], expected: [0] },
];

describe('colorTheArray', () => {
        test.each(
                structuredClone(testcases),
        )('colorTheArray($n, $queries) -> $expected', ({
                n,
                queries,
                expected,
        }) => {
                expect(Array.from(colorTheArray(n, queries))).toStrictEqual(
                        expected,
                );
        });
});
