import { describe, expect, test } from 'bun:test';
import { shiftGrid } from '../../../src/problems/1201-1300/1260_shift-2d-grid.js';

const testcases = [
        {
                grid: [
                        [1, 2, 3],
                        [4, 5, 6],
                        [7, 8, 9],
                ],
                k: 1,
                expected: [
                        [9, 1, 2],
                        [3, 4, 5],
                        [6, 7, 8],
                ],
        },
        {
                grid: [
                        [3, 8, 1, 9],
                        [19, 7, 2, 5],
                        [4, 6, 11, 10],
                        [12, 0, 21, 13],
                ],
                k: 4,
                expected: [
                        [12, 0, 21, 13],
                        [3, 8, 1, 9],
                        [19, 7, 2, 5],
                        [4, 6, 11, 10],
                ],
        },
        {
                grid: [
                        [1, 2, 3],
                        [4, 5, 6],
                        [7, 8, 9],
                ],
                k: 9,
                expected: [
                        [1, 2, 3],
                        [4, 5, 6],
                        [7, 8, 9],
                ],
        },
];

describe('shiftGrid', () => {
        test.each(
                structuredClone(testcases),
        )('shiftGrid($grid, $k) -> $expected', ({ grid, k, expected }) => {
                expect(shiftGrid(grid, k)).toStrictEqual(expected);
        });
});
