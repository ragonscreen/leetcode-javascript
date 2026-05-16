import { describe, expect, test } from 'bun:test';
import {
        gridGame,
        gridGame1,
} from '../../../src/problems/2001-2100/2017_grid-game.js';

const testcases = [
        {
                grid: [
                        [2, 5, 4],
                        [1, 5, 1],
                ],
                expected: 4,
        },
        {
                grid: [
                        [3, 3, 1],
                        [8, 5, 2],
                ],
                expected: 4,
        },
        {
                grid: [
                        [1, 3, 1, 15],
                        [1, 3, 3, 1],
                ],
                expected: 7,
        },
        {
                grid: [
                        [20, 3, 20, 17, 2, 12, 15, 17, 4, 15],
                        [20, 10, 13, 14, 15, 5, 2, 3, 14, 3],
                ],
                expected: 63,
        },
];

describe('gridGame', () => {
        test.each(structuredClone(testcases))('gridGame($grid) -> $expected', ({
                grid,
                expected,
        }) => {
                expect(gridGame(grid)).toStrictEqual(expected);
        });
});

describe('gridGame1', () => {
        test.each(
                structuredClone(testcases),
        )('gridGame1($grid) -> $expected', ({ grid, expected }) => {
                expect(gridGame1(grid)).toStrictEqual(expected);
        });
});
