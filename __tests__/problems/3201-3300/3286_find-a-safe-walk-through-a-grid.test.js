import { describe, expect, test } from 'bun:test';
import { findSafeWalk } from '../../../src/problems/3201-3300/3286_find-a-safe-walk-through-a-grid.js';

const testcases = [
        {
                grid: [
                        [0, 1, 0, 0, 0],
                        [0, 1, 0, 1, 0],
                        [0, 0, 0, 1, 0],
                ],
                health: 1,
                expected: true,
        },
        {
                grid: [
                        [0, 1, 1, 0, 0, 0],
                        [1, 0, 1, 0, 0, 0],
                        [0, 1, 1, 1, 0, 1],
                        [0, 0, 1, 0, 1, 0],
                ],
                health: 3,
                expected: false,
        },
        {
                grid: [
                        [1, 1, 1],
                        [1, 0, 1],
                        [1, 1, 1],
                ],
                health: 5,
                expected: true,
        },
];

describe('findSafeWalk', () => {
        test.each(
                structuredClone(testcases),
        )('findSafeWalk($grid, $health) -> $expected', ({
                grid,
                health,
                expected,
        }) => {
                expect(findSafeWalk(grid, health)).toStrictEqual(expected);
        });
});
