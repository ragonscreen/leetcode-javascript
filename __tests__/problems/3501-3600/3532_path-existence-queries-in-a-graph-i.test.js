import { describe, expect, test } from 'bun:test';
import { pathExistenceQueries } from '../../../src/problems/3501-3600/3532_path-existence-queries-in-a-graph-i.js';

const testcases = [
        {
                n: 2,
                nums: [1, 3],
                maxDiff: 1,
                queries: [
                        [0, 0],
                        [0, 1],
                ],
                expected: [true, false],
        },
        {
                n: 4,
                nums: [2, 5, 6, 8],
                maxDiff: 2,
                queries: [
                        [0, 1],
                        [0, 2],
                        [1, 3],
                        [2, 3],
                ],
                expected: [false, false, true, true],
        },
        {
                n: 23,
                nums: [
                        0, 1, 6, 8, 8, 11, 15, 15, 19, 25, 28, 28, 32, 32, 32,
                        33, 35, 39, 39, 44, 45, 47, 48,
                ],
                maxDiff: 2,
                queries: [
                        [18, 6],
                        [7, 2],
                        [15, 11],
                        [17, 20],
                        [16, 2],
                        [20, 15],
                        [19, 11],
                ],
                expected: [false, false, false, false, false, false, false],
        },
];

describe('pathExistenceQueries', () => {
        test.each(
                structuredClone(testcases),
        )('pathExistenceQueries($n, $nums, $maxDiff, $queries) -> $expected', ({
                n,
                nums,
                maxDiff,
                queries,
                expected,
        }) => {
                expect(
                        pathExistenceQueries(n, nums, maxDiff, queries),
                ).toStrictEqual(expected);
        });
});
