import { describe, expect, test } from 'bun:test';
import {
        setZeroes,
        setZeroes1,
} from '../../../src/problems/0001-0100/0073_set-matrix-zeroes.js';

const testcases = [
        {
                matrix: [
                        [1, 1, 1],
                        [1, 0, 1],
                        [1, 1, 1],
                ],
                expected: [
                        [1, 0, 1],
                        [0, 0, 0],
                        [1, 0, 1],
                ],
        },
        {
                matrix: [
                        [0, 1, 2, 0],
                        [3, 4, 5, 2],
                        [1, 3, 1, 5],
                ],
                expected: [
                        [0, 0, 0, 0],
                        [0, 4, 5, 0],
                        [0, 3, 1, 0],
                ],
        },
];

describe('setZeroes', () => {
        test.each(
                structuredClone(testcases),
        )('setZeroes($matrix) -> $expected', ({ matrix, expected }) => {
                expect(setZeroes(matrix)).toBeNil();
                expect(matrix).toStrictEqual(expected);
        });
});

describe('setZeroes1', () => {
        test.each(
                structuredClone(testcases),
        )('setZeroes1($matrix) -> $expected', ({ matrix, expected }) => {
                expect(setZeroes1(matrix)).toBeNil();
                expect(matrix).toStrictEqual(expected);
        });
});
