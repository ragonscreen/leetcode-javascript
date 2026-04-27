import { describe, expect, test } from 'bun:test';
import { hasValidPath } from '../../../src/problems/1301-1400/1391_check-if-there-is-a-valid-path-in-a-grid.js';

const testcases = [
        {
                grid: [
                        [2, 4, 3],
                        [6, 5, 2],
                ],
                expected: true,
        },
        {
                grid: [
                        [1, 2, 1],
                        [1, 2, 1],
                ],
                expected: false,
        },
        { grid: [[1, 1, 2]], expected: false },
        {
                grid: [
                        [4, 1],
                        [6, 1],
                ],
                expected: true,
        },
        {
                grid: [
                        [2, 6, 3],
                        [6, 5, 2],
                ],
                expected: false,
        },
];

describe('hasValidPath', () => {
        test.each(
                structuredClone(testcases),
        )('hasValidPath($grid) -> $expected', ({ grid, expected }) => {
                expect(hasValidPath(grid)).toStrictEqual(expected);
        });
});
