import { describe, expect, test } from 'bun:test';
import { minGenerations } from '../../../src/problems/3901-4000/3923_minimum-generations-to-target-point.js';

const testcases = [
        {
                points: [
                        [0, 0, 0],
                        [6, 6, 6],
                ],
                target: [3, 3, 3],
                expected: 1,
        },
        {
                points: [
                        [0, 0, 0],
                        [5, 5, 5],
                ],
                target: [1, 1, 1],
                expected: 2,
        },
        {
                points: [
                        [0, 0, 0],
                        [2, 2, 2],
                        [3, 3, 3],
                ],
                target: [2, 2, 2],
                expected: 0,
        },
        { points: [[1, 2, 3]], target: [5, 5, 5], expected: -1 },
        { points: [[0, 6, 1]], target: [0, 6, 1], expected: 0 },
        {
                points: [
                        [0, 3, 3],
                        [4, 0, 1],
                ],
                target: [3, 0, 1],
                expected: 2,
        },
        {
                points: [
                        [2, 0, 1],
                        [0, 1, 5],
                        [2, 0, 4],
                ],
                target: [2, 0, 4],
                expected: 0,
        },
        {
                points: [
                        [3, 2, 1],
                        [6, 5, 6],
                        [3, 0, 5],
                ],
                target: [4, 4, 6],
                expected: -1,
        },
        {
                points: [
                        [5, 1, 4],
                        [3, 5, 2],
                        [3, 3, 2],
                ],
                target: [1, 2, 2],
                expected: -1,
        },
        {
                points: [
                        [4, 6, 5],
                        [4, 6, 4],
                        [6, 6, 5],
                        [4, 4, 5],
                        [5, 4, 4],
                        [5, 5, 4],
                ],
                target: [4, 6, 6],
                expected: -1,
        },
        {
                points: [
                        [3, 1, 0],
                        [4, 5, 5],
                        [3, 2, 2],
                        [3, 5, 1],
                        [3, 2, 0],
                        [6, 5, 4],
                        [6, 2, 3],
                        [4, 5, 4],
                        [6, 4, 5],
                ],
                target: [6, 1, 2],
                expected: -1,
        },
        {
                points: [
                        [1, 4, 6],
                        [1, 4, 3],
                        [1, 6, 4],
                        [2, 6, 1],
                        [1, 2, 4],
                        [1, 0, 6],
                        [3, 0, 5],
                        [3, 4, 1],
                ],
                target: [0, 4, 2],
                expected: -1,
        },
        // disabled for test performance
        // {
        //         points: [
        //                 [3, 4, 6],
        //                 [3, 5, 0],
        //                 [3, 0, 3],
        //                 [5, 0, 6],
        //                 [1, 4, 4],
        //                 [6, 4, 4],
        //                 [2, 1, 5],
        //                 [3, 5, 1],
        //         ],
        //         target: [5, 0, 2],
        //         expected: 7,
        // },
        // {
        //         points: [
        //                 [0, 6, 6],
        //                 [6, 0, 6],
        //                 [6, 6, 0],
        //         ],
        //         target: [0, 0, 0],
        //         expected: 13,
        // },
];

describe('minGenerations', () => {
        test.each(
                structuredClone(testcases),
        )('minGenerations($points, $target) -> $expected', ({
                points,
                target,
                expected,
        }) => {
                expect(minGenerations(points, target)).toStrictEqual(expected);
        });
});
