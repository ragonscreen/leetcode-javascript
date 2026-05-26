import { describe, expect, test } from 'bun:test';
import { shortestPathBinaryMatrix } from '../../../src/problems/1001-1100/1091_shortest-path-in-binary-matrix.js';

const testcases = [
        {
                grid: [
                        [0, 1],
                        [1, 0],
                ],
                expected: 2,
        },
        {
                grid: [
                        [0, 0, 0],
                        [1, 1, 0],
                        [1, 1, 0],
                ],
                expected: 4,
        },
        {
                grid: [
                        [1, 0, 0],
                        [1, 1, 0],
                        [1, 1, 0],
                ],
                expected: -1,
        },
        {
                grid: [
                        [0, 0, 0, 0, 1],
                        [1, 0, 0, 0, 0],
                        [0, 1, 0, 1, 0],
                        [0, 0, 0, 1, 1],
                        [0, 0, 0, 1, 0],
                ],
                expected: -1,
        },
];

describe('shortestPathBinaryMatrix', () => {
        test.each(
                structuredClone(testcases),
        )('shortestPathBinaryMatrix($grid) -> $expected', ({
                grid,
                expected,
        }) => {
                expect(shortestPathBinaryMatrix(grid)).toStrictEqual(expected);
        });
});
