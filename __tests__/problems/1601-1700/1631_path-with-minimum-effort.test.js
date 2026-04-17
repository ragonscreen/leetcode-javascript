import { describe, expect, test } from 'bun:test';
import {
        minimumEffortPath,
        minimumEffortPath1,
} from '../../../src/problems/1601-1700/1631_path-with-minimum-effort.js';

const testcases = [
        {
                heights: [
                        [1, 2, 2],
                        [3, 8, 2],
                        [5, 3, 5],
                ],
                expected: 2,
        },
        {
                heights: [
                        [1, 2, 3],
                        [3, 8, 4],
                        [5, 3, 5],
                ],
                expected: 1,
        },
        {
                heights: [
                        [1, 2, 1, 1, 1],
                        [1, 2, 1, 2, 1],
                        [1, 2, 1, 2, 1],
                        [1, 2, 1, 2, 1],
                        [1, 1, 1, 2, 1],
                ],
                expected: 0,
        },
        {
                heights: [[1, 10, 6, 7, 9, 10, 4, 9]],
                expected: 9,
        },
];

describe('minimumEffortPath', () => {
        test.each(
                structuredClone(testcases),
        )('minimumEffortPath($heights) -> $expected', ({
                heights,
                expected,
        }) => {
                expect(minimumEffortPath(heights)).toStrictEqual(expected);
        });
});

describe('minimumEffortPath1', () => {
        test.each(
                structuredClone(testcases),
        )('minimumEffortPath1($heights) -> $expected', ({
                heights,
                expected,
        }) => {
                expect(minimumEffortPath1(heights)).toStrictEqual(expected);
        });
});
