import { describe, expect, test } from 'bun:test';
import {
        searchMatrix,
        searchMatrix1,
} from '../../../src/problems/0201-0300/0240_search-a-2d-matrix-ii.js';

const testcases = [
        {
                matrix: [
                        [1, 4, 7, 11, 15],
                        [2, 5, 8, 12, 19],
                        [3, 6, 9, 16, 22],
                        [10, 13, 14, 17, 24],
                        [18, 21, 23, 26, 30],
                ],
                target: 5,
                expected: true,
        },
        {
                matrix: [
                        [1, 4, 7, 11, 15],
                        [2, 5, 8, 12, 19],
                        [3, 6, 9, 16, 22],
                        [10, 13, 14, 17, 24],
                        [18, 21, 23, 26, 30],
                ],
                target: 20,
                expected: false,
        },
        {
                matrix: [
                        [1, 4, 7, 11, 15],
                        [2, 5, 8, 12, 19],
                        [3, 6, 9, 16, 22],
                        [10, 13, 14, 17, 24],
                        [18, 19, 23, 26, 30],
                ],
                target: 20,
                expected: false,
        },
        {
                matrix: [
                        [1, 4],
                        [2, 5],
                ],
                target: 2,
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

describe('searchMatrix1', () => {
        test.each(
                structuredClone(testcases),
        )('searchMatrix1($matrix, $target) -> $expected', ({
                matrix,
                target,
                expected,
        }) => {
                expect(searchMatrix1(matrix, target)).toStrictEqual(expected);
        });
});
