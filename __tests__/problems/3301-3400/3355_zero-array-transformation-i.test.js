import { describe, expect, test } from 'bun:test';
import { isZeroArray } from '../../../src/problems/3301-3400/3355_zero-array-transformation-i.js';

const testcases = [
        { nums: [1, 0, 1], queries: [[0, 2]], expected: true },
        {
                nums: [4, 3, 2, 1],
                queries: [
                        [1, 3],
                        [0, 2],
                ],
                expected: false,
        },
];

describe('isZeroArray', () => {
        test.each(
                structuredClone(testcases),
        )('isZeroArray($nums, $queries) -> $expected', ({
                nums,
                queries,
                expected,
        }) => {
                expect(isZeroArray(nums, queries)).toStrictEqual(expected);
        });
});
