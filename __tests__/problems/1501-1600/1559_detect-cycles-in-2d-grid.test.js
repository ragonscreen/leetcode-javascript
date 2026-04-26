import { describe, expect, test } from 'bun:test';
import { containsCycle } from '../../../src/problems/1501-1600/1559_detect-cycles-in-2d-grid.js';

const testcases = [
        {
                grid: [
                        ['a', 'a', 'a', 'a'],
                        ['a', 'b', 'b', 'a'],
                        ['a', 'b', 'b', 'a'],
                        ['a', 'a', 'a', 'a'],
                ],
                expected: true,
        },
        {
                grid: [
                        ['c', 'c', 'c', 'a'],
                        ['c', 'd', 'c', 'c'],
                        ['c', 'c', 'e', 'c'],
                        ['f', 'c', 'c', 'c'],
                ],
                expected: true,
        },
        {
                grid: [
                        ['a', 'b', 'b'],
                        ['b', 'z', 'b'],
                        ['b', 'b', 'a'],
                ],
                expected: false,
        },
        {
                grid: [
                        ['f', 'c', 'b', 'd', 'f', 'a', 'e', 'e', 'a', 'c', 'e'],
                        ['d', 'f', 'f', 'c', 'c', 'a', 'b', 'b', 'a', 'c', 'f'],
                        ['e', 'd', 'd', 'a', 'd', 'd', 'd', 'c', 'f', 'b', 'e'],
                        ['e', 'a', 'd', 'd', 'a', 'e', 'e', 'a', 'c', 'f', 'b'],
                        ['d', 'c', 'f', 'a', 'b', 'c', 'c', 'd', 'e', 'c', 'b'],
                        ['d', 'a', 'e', 'd', 'a', 'a', 'a', 'e', 'f', 'a', 'b'],
                        ['d', 'f', 'e', 'a', 'f', 'b', 'c', 'b', 'd', 'a', 'e'],
                        ['c', 'f', 'd', 'c', 'd', 'a', 'e', 'e', 'a', 'a', 'e'],
                        ['f', 'b', 'c', 'e', 'e', 'b', 'e', 'b', 'a', 'a', 'a'],
                        ['d', 'd', 'b', 'c', 'b', 'f', 'a', 'c', 'b', 'c', 'd'],
                        ['e', 'e', 'c', 'c', 'e', 'b', 'e', 'f', 'b', 'c', 'd'],
                ],
                expected: true,
        },
        {
                grid: [
                        ['a', 'b', 'c', 'd'],
                        ['a', 'a', 'a', 'a'],
                        ['g', 'h', 'c', 'a'],
                        ['a', 'b', 'c', 'a'],
                        ['a', 'b', 'c', 'a'],
                ],
                expected: false,
        },
];

describe('containsCycle', () => {
        test.each(
                structuredClone(testcases),
        )('containsCycle($grid) -> $expected', ({ grid, expected }) => {
                expect(containsCycle(grid)).toStrictEqual(expected);
        });
});
