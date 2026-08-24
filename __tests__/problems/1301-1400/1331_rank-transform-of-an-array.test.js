import { describe, expect, test } from 'bun:test';
import {
        arrayRankTransform,
        arrayRankTransform1,
} from '../../../src/problems/1301-1400/1331_rank-transform-of-an-array.js';

const testcases = [
        { arr: [40, 10, 20, 30], expected: [4, 1, 2, 3] },
        { arr: [100, 100, 100], expected: [1, 1, 1] },
        {
                arr: [37, 12, 28, 9, 100, 56, 80, 5, 12],
                expected: [5, 3, 4, 2, 8, 6, 7, 1, 3],
        },
        {
                arr: [-1, -2, -3, -1, 0],
                expected: [3, 2, 1, 3, 4],
        },
];

describe('arrayRankTransform', () => {
        test.each(
                structuredClone(testcases),
        )('arrayRankTransform($arr) -> $expected', ({ arr, expected }) => {
                expect(Array.from(arrayRankTransform(arr))).toStrictEqual(
                        expected,
                );
        });
});

describe('arrayRankTransform1', () => {
        test.each(
                structuredClone(testcases),
        )('arrayRankTransform1($arr) -> $expected', ({ arr, expected }) => {
                expect(Array.from(arrayRankTransform1(arr))).toStrictEqual(
                        expected,
                );
        });
});
