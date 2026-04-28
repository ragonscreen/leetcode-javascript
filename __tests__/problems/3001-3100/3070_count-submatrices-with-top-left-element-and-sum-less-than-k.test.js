import { describe, expect, test } from 'bun:test';
import { countSubmatrices } from '../../../src/problems/3001-3100/3070_count-submatrices-with-top-left-element-and-sum-less-than-k.js';

const testcases = [
        {
                grid: [
                        [7, 6, 3],
                        [6, 6, 1],
                ],
                k: 18,
                expected: 4,
        },
        {
                grid: [
                        [7, 2, 9],
                        [1, 5, 0],
                        [2, 6, 6],
                ],
                k: 20,
                expected: 6,
        },
];

describe('countSubmatrices', () => {
        test.each(
                structuredClone(testcases),
        )('countSubmatrices($grid, $k) -> $expected', ({
                grid,
                k,
                expected,
        }) => {
                expect(countSubmatrices(grid, k)).toStrictEqual(expected);
        });
});
