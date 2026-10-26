import { describe, expect, test } from 'bun:test';

import { matrixSumQueries } from './2718_sum-of-matrix-after-queries.js';

const testcases = [
        {
                n: 3,
                queries: [
                        [0, 0, 1],
                        [1, 2, 2],
                        [0, 2, 3],
                        [1, 0, 4],
                ],
                expected: 23,
        },
        {
                n: 3,
                queries: [
                        [0, 0, 4],
                        [0, 1, 2],
                        [1, 0, 1],
                        [0, 2, 3],
                        [1, 2, 1],
                ],
                expected: 17,
        },
];

describe('matrixSumQueries', () => {
        test.each(structuredClone(testcases))(
                'matrixSumQueries($n, $queries) -> $expected',
                ({ n, queries, expected }) => {
                        expect(matrixSumQueries(n, queries)).toStrictEqual(expected);
                },
        );
});
