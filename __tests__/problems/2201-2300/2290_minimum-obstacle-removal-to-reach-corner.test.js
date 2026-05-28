import { describe, expect, test } from 'bun:test';
import { minimumObstacles } from '../../../src/problems/2201-2300/2290_minimum-obstacle-removal-to-reach-corner.js';

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
