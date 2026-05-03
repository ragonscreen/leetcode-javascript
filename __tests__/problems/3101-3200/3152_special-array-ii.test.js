import { describe, expect, test } from 'bun:test';
import { isArraySpecial } from '../../../src/problems/3101-3200/3152_special-array-ii.js';

const testcases = [
        { nums: [3, 4, 1, 2, 6], queries: [[0, 4]], expected: [false] },
        {
                nums: [4, 3, 1, 6],
                queries: [
                        [0, 2],
                        [2, 3],
                ],
                expected: [false, true],
        },
        {
                nums: [1],
                queries: [[0, 0]],
                expected: [true],
        },
        {
                nums: [2, 2],
                queries: [[0, 0]],
                expected: [true],
        },
];

describe('isArraySpecial', () => {
        test.each(
                structuredClone(testcases),
        )('isArraySpecial($nums, $queries) -> $expected', ({
                nums,
                queries,
                expected,
        }) => {
                expect(isArraySpecial(nums, queries)).toStrictEqual(expected);
        });
});
