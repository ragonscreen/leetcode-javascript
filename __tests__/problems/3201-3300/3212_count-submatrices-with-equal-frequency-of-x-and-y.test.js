import { describe, expect, test } from 'bun:test';
import {
        numberOfSubmatrices,
        numberOfSubmatrices1,
} from '../../../src/problems/3201-3300/3212_count-submatrices-with-equal-frequency-of-x-and-y.js';

const testcases = [
        {
                grid: [
                        ['X', 'Y', '.'],
                        ['Y', '.', '.'],
                ],
                expected: 3,
        },
        {
                grid: [
                        ['X', 'X'],
                        ['X', 'Y'],
                ],
                expected: 0,
        },
        {
                grid: [
                        ['.', '.'],
                        ['.', '.'],
                ],
                expected: 0,
        },
];

describe('numberOfSubmatrices', () => {
        test.each(
                structuredClone(testcases),
        )('numberOfSubmatrices($grid) -> $expected', ({ grid, expected }) => {
                expect(numberOfSubmatrices(grid)).toStrictEqual(expected);
        });
});

describe('numberOfSubmatrices1', () => {
        test.each(
                structuredClone(testcases),
        )('numberOfSubmatrices1($grid) -> $expected', ({ grid, expected }) => {
                expect(numberOfSubmatrices1(grid)).toStrictEqual(expected);
        });
});
