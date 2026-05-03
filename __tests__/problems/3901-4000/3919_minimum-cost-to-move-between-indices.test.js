import { describe, expect, test } from 'bun:test';
import { minCost } from '../../../src/problems/3901-4000/3919_minimum-cost-to-move-between-indices.js';

const testcases = [
        {
                nums: [-5, -2, 3],
                queries: [
                        [0, 2],
                        [2, 0],
                        [1, 2],
                ],
                expected: [6, 2, 5],
        },
        {
                nums: [0, 2, 3, 9],
                queries: [
                        [3, 0],
                        [1, 2],
                        [2, 0],
                ],
                expected: [4, 1, 3],
        },
        {
                nums: [-2, 2, 6],
                queries: [[0, 2]],
                expected: [5],
        },
        {
                nums: [-12, -4, 17, 24],
                queries: [
                        [2, 0],
                        [0, 2],
                ],
                expected: [22, 22],
        },
];

describe('minCost', () => {
        test.each(
                structuredClone(testcases),
        )('minCost($nums, $queries) -> $expected', ({
                nums,
                queries,
                expected,
        }) => {
                expect(Array.from(minCost(nums, queries))).toStrictEqual(
                        expected,
                );
        });
});
