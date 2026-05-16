import { describe, expect, test } from 'bun:test';
import {
        minPathSum,
        minPathSum1,
} from '../../../src/problems/0001-0100/0064_minimum-path-sum.js';

const testcases = [
        {
                grid: [
                        [1, 3, 1],
                        [1, 5, 1],
                        [4, 2, 1],
                ],
                expected: 7,
        },
        {
                grid: [
                        [1, 2, 3],
                        [4, 5, 6],
                ],
                expected: 12,
        },
];

describe('minPathSum', () => {
        test.each(
                structuredClone(testcases),
        )('minPathSum($grid) -> $expected', ({ grid, expected }) => {
                expect(minPathSum(grid)).toStrictEqual(expected);
        });
});

describe('minPathSum1', () => {
        test.each(
                structuredClone(testcases),
        )('minPathSum1($grid) -> $expected', ({ grid, expected }) => {
                expect(minPathSum1(grid)).toStrictEqual(expected);
        });
});
