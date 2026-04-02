import { describe, expect, test } from 'bun:test';
import { searchMatrix } from '../../../src/problems/0001-0100/0074_search-a-2d-matrix.js';

const testcases = [
        {
                matrix: [
                        [1, 3, 5, 7],
                        [10, 11, 16, 20],
                        [23, 30, 34, 60],
                ],
                target: 3,
                expected: true,
        },
        {
                matrix: [
                        [1, 3, 5, 7],
                        [10, 11, 16, 20],
                        [23, 30, 34, 60],
                ],
                target: 13,
                expected: false,
        },
        {
                matrix: [[1]],
                target: 0,
                expected: false,
        },
        {
                matrix: [[1]],
                target: 2,
                expected: false,
        },
        {
                matrix: [[1, 3]],
                target: 3,
                expected: true,
        },
        {
                matrix: [[1, 3]],
                target: 1,
                expected: true,
        },
];

describe('searchMatrix', () => {
        test.each(
                structuredClone(testcases),
        )('searchMatrix($matrix, $target) -> $expected', ({
                matrix,
                target,
                expected,
        }) => {
                expect(searchMatrix(matrix, target)).toStrictEqual(expected);
        });
});
