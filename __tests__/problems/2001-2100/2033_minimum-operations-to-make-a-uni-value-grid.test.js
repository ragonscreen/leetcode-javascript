import { describe, expect, test } from 'bun:test';
import { minOperations } from '../../../src/problems/2001-2100/2033_minimum-operations-to-make-a-uni-value-grid.js';

const testcases = [
        {
                grid: [
                        [2, 4],
                        [6, 8],
                ],
                x: 2,
                expected: 4,
        },
        {
                grid: [
                        [1, 5],
                        [2, 3],
                ],
                x: 1,
                expected: 5,
        },
        {
                grid: [
                        [1, 2],
                        [3, 4],
                ],
                x: 2,
                expected: -1,
        },
];

describe('minOperations', () => {
        test.each(
                structuredClone(testcases),
        )('minOperations($grid, $x) -> $expected', ({ grid, x, expected }) => {
                expect(minOperations(grid, x)).toStrictEqual(expected);
        });
});
