import { describe, expect, test } from 'bun:test';
import { minimumTime } from '../../../src/problems/2501-2600/2577_minimum-time-to-visit-a-cell-in-a-grid.js';

const testcases = [
        {
                grid: [
                        [0, 1, 3, 2],
                        [5, 1, 2, 5],
                        [4, 3, 8, 6],
                ],
                expected: 7,
        },
        {
                grid: [
                        [0, 2, 4],
                        [3, 2, 1],
                        [1, 0, 4],
                ],
                expected: -1,
        },
        {
                grid: [
                        [0, 1, 99],
                        [3, 99, 99],
                        [4, 5, 6],
                ],
                expected: 6,
        },
        {
                grid: [
                        [0, 38, 86, 76],
                        [1, 90, 75, 49],
                        [87, 29, 42, 76],
                        [92, 48, 82, 0],
                        [85, 7, 36, 81],
                ],
                expected: 91,
        },
];

describe('minimumTime', () => {
        test.each(
                structuredClone(testcases),
        )('minimumTime($grid) -> $expected', ({ grid, expected }) => {
                expect(minimumTime(grid)).toStrictEqual(expected);
        });
});
