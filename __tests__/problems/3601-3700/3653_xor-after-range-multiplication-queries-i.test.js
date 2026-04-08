import { describe, expect, test } from 'bun:test';
import { xorAfterQueries } from '../../../src/problems/3601-3700/3653_xor-after-range-multiplication-queries-i.js';

const testcases = [
        { nums: [1, 1, 1], queries: [[0, 2, 1, 4]], expected: 4 },
        {
                nums: [2, 3, 1, 5, 4],
                queries: [
                        [1, 4, 2, 3],
                        [0, 2, 1, 2],
                ],
                expected: 31,
        },
];

describe('xorAfterQueries', () => {
        test.each(
                structuredClone(testcases),
        )('xorAfterQueries($nums, $queries) -> $expected', ({
                nums,
                queries,
                expected,
        }) => {
                expect(xorAfterQueries(nums, queries)).toStrictEqual(expected);
        });
});
