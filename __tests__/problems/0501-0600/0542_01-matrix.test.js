import { describe, expect, test } from 'bun:test';
import { updateMatrix } from '../../../src/problems/0501-0600/0542_01-matrix.js';

const testcases = [
        {
                mat: [
                        [0, 0, 0],
                        [0, 1, 0],
                        [0, 0, 0],
                ],
                expected: [
                        [0, 0, 0],
                        [0, 1, 0],
                        [0, 0, 0],
                ],
        },
        {
                mat: [
                        [0, 0, 0],
                        [0, 1, 0],
                        [1, 1, 1],
                ],
                expected: [
                        [0, 0, 0],
                        [0, 1, 0],
                        [1, 2, 1],
                ],
        },
];

describe('updateMatrix', () => {
        test.each(
                structuredClone(testcases),
        )('updateMatrix($mat) -> $expected', ({ mat, expected }) => {
                expect(updateMatrix(mat)).toStrictEqual(expected);
        });
});
