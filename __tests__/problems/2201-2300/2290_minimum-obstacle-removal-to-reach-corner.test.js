import { describe, expect, test } from 'bun:test';
import {
        minimumObstacles,
        minimumObstacles1,
        minimumObstacles2,
} from '../../../src/problems/2201-2300/2290_minimum-obstacle-removal-to-reach-corner.js';

const testcases = [
        {
                grid: [
                        [0, 1, 1],
                        [1, 1, 0],
                        [1, 1, 0],
                ],
                expected: 2,
        },
        {
                grid: [
                        [0, 1, 0, 0, 0],
                        [0, 1, 0, 1, 0],
                        [0, 0, 0, 1, 0],
                ],
                expected: 0,
        },
];

describe('minimumObstacles', () => {
        test.each(
                structuredClone(testcases),
        )('minimumObstacles($grid) -> $expected', ({ grid, expected }) => {
                expect(minimumObstacles(grid)).toStrictEqual(expected);
        });
});

describe('minimumObstacles1', () => {
        test.each(
                structuredClone(testcases),
        )('minimumObstacles1($grid) -> $expected', ({ grid, expected }) => {
                expect(minimumObstacles1(grid)).toStrictEqual(expected);
        });
});

describe('minimumObstacles2', () => {
        test.each(
                structuredClone(testcases),
        )('minimumObstacles2($grid) -> $expected', ({ grid, expected }) => {
                expect(minimumObstacles2(grid)).toStrictEqual(expected);
        });
});
