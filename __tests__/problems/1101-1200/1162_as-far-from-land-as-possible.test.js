import { describe, expect, test } from 'bun:test';
import { maxDistance } from '../../../src/problems/1101-1200/1162_as-far-from-land-as-possible.js';

const testcases = [
        {
                grid: [
                        [1, 0, 1],
                        [0, 0, 0],
                        [1, 0, 1],
                ],
                expected: 2,
        },
        {
                grid: [
                        [1, 0, 0],
                        [0, 0, 0],
                        [0, 0, 0],
                ],
                expected: 4,
        },
        {
                grid: [
                        [1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1],
                ],
                expected: -1,
        },
];

describe('maxDistance', () => {
        test.each(
                structuredClone(testcases),
        )('maxDistance($grid) -> $expected', ({ grid, expected }) => {
                expect(maxDistance(grid)).toStrictEqual(expected);
        });
});
