import { describe, expect, test } from 'bun:test';
import { merge } from '../../../src/problems/0001-0100/0056_merge-intervals.js';

const testcases = [
        {
                intervals: [
                        [1, 3],
                        [2, 6],
                        [8, 10],
                        [15, 18],
                ],
                expected: [
                        [1, 6],
                        [8, 10],
                        [15, 18],
                ],
        },
        {
                intervals: [
                        [1, 4],
                        [4, 5],
                ],
                expected: [[1, 5]],
        },
        {
                intervals: [
                        [4, 7],
                        [1, 4],
                ],
                expected: [[1, 7]],
        },
        { intervals: [[1, 3]], expected: [[1, 3]] },
        {
                intervals: [
                        [1, 4],
                        [2, 3],
                ],
                expected: [[1, 4]],
        },
        {
                intervals: [
                        [1, 4],
                        [0, 0],
                ],
                expected: [
                        [0, 0],
                        [1, 4],
                ],
        },
        {
                intervals: [
                        [1, 4],
                        [0, 2],
                        [3, 5],
                ],
                expected: [[0, 5]],
        },
        {
                intervals: [
                        [1, 4],
                        [5, 6],
                ],
                expected: [
                        [1, 4],
                        [5, 6],
                ],
        },
];

describe('merge', () => {
        test.each(
                structuredClone(testcases),
        )('merge($intervals) -> $expected', ({ intervals, expected }) => {
                expect(merge(intervals)).toStrictEqual(expected);
        });
});
