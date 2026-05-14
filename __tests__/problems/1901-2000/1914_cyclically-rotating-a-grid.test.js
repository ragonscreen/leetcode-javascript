import { describe, expect, test } from 'bun:test';
import {
        rotateGrid,
        rotateGrid1,
} from '../../../src/problems/1901-2000/1914_cyclically-rotating-a-grid.js';

const testcases = [
        {
                grid: [
                        [40, 10],
                        [30, 20],
                ],
                k: 1,
                expected: [
                        [10, 20],
                        [40, 30],
                ],
        },
        {
                grid: [
                        [1, 2, 3, 4],
                        [5, 6, 7, 8],
                        [9, 10, 11, 12],
                        [13, 14, 15, 16],
                ],
                k: 2,
                expected: [
                        [3, 4, 8, 12],
                        [2, 11, 10, 16],
                        [1, 7, 6, 15],
                        [5, 9, 13, 14],
                ],
        },
];

describe('rotateGrid', () => {
        test.each(
                structuredClone(testcases),
        )('rotateGrid($grid, $k) -> $expected', ({ grid, k, expected }) => {
                expect(rotateGrid(grid, k)).toStrictEqual(expected);
        });
});

describe('rotateGrid1', () => {
        test.each(
                structuredClone(testcases),
        )('rotateGrid1($grid, $k) -> $expected', ({ grid, k, expected }) => {
                expect(rotateGrid1(grid, k)).toStrictEqual(expected);
        });
});
