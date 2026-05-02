import { describe, expect, test } from 'bun:test';
import { getSkyline } from '../../../src/problems/0000_wip/0218_the-skyline-problem.js';

const testcases = [
        {
                buildings: [
                        [2, 9, 10],
                        [3, 7, 15],
                        [5, 12, 12],
                        [15, 20, 10],
                        [19, 24, 8],
                ],
                expected: [
                        [2, 10],
                        [3, 15],
                        [7, 12],
                        [12, 0],
                        [15, 10],
                        [20, 8],
                        [24, 0],
                ],
        },
        // {
        //         buildings: [
        //                 [0, 2, 3],
        //                 [2, 5, 3],
        //         ],
        //         expected: [
        //                 [0, 3],
        //                 [5, 0],
        //         ],
        // },
];

describe.skip('getSkyline', () => {
        test.each(
                structuredClone(testcases),
        )('getSkyline($buildings) -> $expected', ({ buildings, expected }) => {
                expect(getSkyline(buildings)).toStrictEqual(expected);
        });
});
