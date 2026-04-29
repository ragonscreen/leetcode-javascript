import { describe, expect, test } from 'bun:test';
import { constructProductMatrix } from '../../../src/problems/2901-3000/2906_construct-product-matrix.js';

const testcases = [
        {
                grid: [
                        [1, 2],
                        [3, 4],
                ],
                expected: [
                        [24, 12],
                        [8, 6],
                ],
        },
        { grid: [[12_345], [2], [1]], expected: [[2], [0], [0]] },
        {
                grid: [
                        [8, 18],
                        [24, 20],
                        [9, 5],
                        [26, 26],
                        [19, 19],
                        [20, 1],
                        [20, 23],
                        [15, 19],
                        [24, 14],
                        [12, 15],
                        [22, 3],
                        [22, 11],
                        [9, 25],
                ],
                expected: [
                        [11_625, 3795],
                        [12_105, 4650],
                        [7590, 6255],
                        [8325, 8325],
                        [4245, 4245],
                        [4650, 6585],
                        [4650, 2970],
                        [2085, 4245],
                        [12_105, 10_170],
                        [11_865, 2085],
                        [3105, 10_425],
                        [3105, 6210],
                        [7590, 3720],
                ],
        },
];

describe('constructProductMatrix', () => {
        test.each(
                structuredClone(testcases),
        )('constructProductMatrix($grid) -> $expected', ({
                grid,
                expected,
        }) => {
                expect(constructProductMatrix(grid)).toStrictEqual(expected);
        });
});
