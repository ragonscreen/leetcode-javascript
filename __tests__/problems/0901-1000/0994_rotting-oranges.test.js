import { describe, expect, test } from 'bun:test';
import { orangesRotting } from '../../../src/problems/0901-1000/0994_rotting-oranges.js';

const testcases = [
        {
                grid: [
                        [2, 1, 1],
                        [1, 1, 0],
                        [0, 1, 1],
                ],
                expected: 4,
        },
        {
                grid: [
                        [2, 1, 1],
                        [0, 1, 1],
                        [1, 0, 1],
                ],
                expected: -1,
        },
        { grid: [[0, 2]], expected: 0 },
        { grid: [[0]], expected: 0 },
];

describe('orangesRotting', () => {
        test.each(
                structuredClone(testcases),
        )('orangesRotting($grid) -> $expected', ({ grid, expected }) => {
                expect(orangesRotting(grid)).toStrictEqual(expected);
        });
});
