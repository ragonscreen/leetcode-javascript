import { describe, expect, test } from 'bun:test';
import { maximumSafenessFactor } from '../../../src/problems/2801-2900/2812_find-the-safest-path-in-a-grid.js';

const testcases = [
        {
                grid: [
                        [1, 0, 0],
                        [0, 0, 0],
                        [0, 0, 1],
                ],
                expected: 0,
        },
        {
                grid: [
                        [0, 0, 1],
                        [0, 0, 0],
                        [0, 0, 0],
                ],
                expected: 2,
        },
        {
                grid: [
                        [0, 0, 0, 1],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                        [1, 0, 0, 0],
                ],
                expected: 2,
        },
];

describe('maximumSafenessFactor', () => {
        test.each(
                structuredClone(testcases),
        )('maximumSafenessFactor($grid) -> $expected', ({ grid, expected }) => {
                expect(maximumSafenessFactor(grid)).toStrictEqual(expected);
        });
});
