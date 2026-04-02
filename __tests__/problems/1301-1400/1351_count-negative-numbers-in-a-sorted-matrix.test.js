import { describe, expect, test } from 'bun:test';
import {
        countNegatives,
        countNegatives1,
        countNegatives2,
} from '../../../src/problems/1301-1400/1351_count-negative-numbers-in-a-sorted-matrix.js';

const testcases = [
        {
                grid: [
                        [4, 3, 2, -1],
                        [3, 2, 1, -1],
                        [1, 1, -1, -2],
                        [-1, -1, -2, -3],
                ],
                expected: 8,
        },
        {
                grid: [
                        [3, 2],
                        [1, 0],
                ],
                expected: 0,
        },
        {
                grid: [
                        [1, 0, -1],
                        [0, -1, -1],
                        [-1, -1, -1],
                        [-1, -1, -1],
                        [-1, -1, -1],
                ],
                expected: 12,
        },
];

describe('countNegatives', () => {
        test.each(
                structuredClone(testcases),
        )('countNegatives($grid) -> $expected', ({ grid, expected }) => {
                expect(countNegatives(grid)).toStrictEqual(expected);
        });
});

describe('countNegatives1', () => {
        test.each(
                structuredClone(testcases),
        )('countNegatives1($grid) -> $expected', ({ grid, expected }) => {
                expect(countNegatives1(grid)).toStrictEqual(expected);
        });
});

describe('countNegatives2', () => {
        test.each(
                structuredClone(testcases),
        )('countNegatives2($grid) -> $expected', ({ grid, expected }) => {
                expect(countNegatives2(grid)).toStrictEqual(expected);
        });
});
