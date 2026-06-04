import { describe, expect, test } from 'bun:test';
import { colorBorder } from '../../../src/problems/1001-1100/1034_coloring-a-border.js';

const testcases = [
        {
                grid: [
                        [1, 1],
                        [1, 2],
                ],
                row: 0,
                col: 0,
                color: 3,
                expected: [
                        [3, 3],
                        [3, 2],
                ],
        },
        {
                grid: [
                        [1, 2, 2],
                        [2, 3, 2],
                ],
                row: 0,
                col: 1,
                color: 3,
                expected: [
                        [1, 3, 3],
                        [2, 3, 3],
                ],
        },
        {
                grid: [
                        [1, 1, 1],
                        [1, 1, 1],
                        [1, 1, 1],
                ],
                row: 1,
                col: 1,
                color: 2,
                expected: [
                        [2, 2, 2],
                        [2, 1, 2],
                        [2, 2, 2],
                ],
        },
];

describe('colorBorder', () => {
        test.each(
                structuredClone(testcases),
        )('colorBorder($grid, $row, $col, $color) -> $expected', ({
                grid,
                row,
                col,
                color,
                expected,
        }) => {
                expect(colorBorder(grid, row, col, color)).toStrictEqual(
                        expected,
                );
        });
});
