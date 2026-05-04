import { describe, expect, test } from 'bun:test';
import { rotate } from '../../../src/problems/0001-0100/0048_rotate-image.js';

const testcases = [
        {
                matrix: [
                        [1, 2, 3],
                        [4, 5, 6],
                        [7, 8, 9],
                ],
                expected: [
                        [7, 4, 1],
                        [8, 5, 2],
                        [9, 6, 3],
                ],
        },
        {
                matrix: [
                        [5, 1, 9, 11],
                        [2, 4, 8, 10],
                        [13, 3, 6, 7],
                        [15, 14, 12, 16],
                ],
                expected: [
                        [15, 13, 2, 5],
                        [14, 3, 4, 1],
                        [12, 6, 8, 9],
                        [16, 7, 10, 11],
                ],
        },
        {
                matrix: [
                        [1, 2, 3, 4, 5, 26, 27],
                        [6, 7, 8, 9, 10, 28, 29],
                        [11, 12, 13, 14, 15, 30, 31],
                        [16, 17, 18, 19, 20, 32, 33],
                        [21, 22, 23, 24, 25, 34, 35],
                        [36, 37, 38, 39, 40, 41, 42],
                        [43, 44, 45, 46, 47, 48, 49],
                ],
                expected: [
                        [43, 36, 21, 16, 11, 6, 1],
                        [44, 37, 22, 17, 12, 7, 2],
                        [45, 38, 23, 18, 13, 8, 3],
                        [46, 39, 24, 19, 14, 9, 4],
                        [47, 40, 25, 20, 15, 10, 5],
                        [48, 41, 34, 32, 30, 28, 26],
                        [49, 42, 35, 33, 31, 29, 27],
                ],
        },
];

describe('rotate', () => {
        test.each(structuredClone(testcases))('rotate($matrix) -> $expected', ({
                matrix,
                expected,
        }) => {
                expect(rotate(matrix)).toBeNil();

                for (let i = 0; i < matrix.length; i++) {
                        for (let j = 0; j < matrix.length; j++) {
                                expect(matrix[i][j]).toStrictEqual(
                                        expected[i][j],
                                );
                        }
                }
        });
});
