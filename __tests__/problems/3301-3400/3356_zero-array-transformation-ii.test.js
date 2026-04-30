import { describe, expect, test } from 'bun:test';
import { minZeroArray } from '../../../src/problems/3301-3400/3356_zero-array-transformation-ii.js';

const testcases = [
        {
                nums: [2, 0, 2],
                queries: [
                        [0, 2, 1],
                        [0, 2, 1],
                        [1, 1, 3],
                ],
                expected: 2,
        },
        {
                nums: [4, 3, 2, 1],
                queries: [
                        [1, 3, 2],
                        [0, 2, 1],
                ],
                expected: -1,
        },
        {
                nums: [3, 3, 3],
                queries: [
                        [0, 2, 1],
                        [0, 2, 1],
                        [0, 2, 1],
                ],
                expected: 3,
        },
];

describe('minZeroArray', () => {
        test.each(
                structuredClone(testcases),
        )('minZeroArray($nums, $queries) -> $expected', ({
                nums,
                queries,
                expected,
        }) => {
                expect(minZeroArray(nums, queries)).toStrictEqual(expected);
        });
});
