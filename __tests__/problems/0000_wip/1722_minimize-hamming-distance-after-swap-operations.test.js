import { describe, expect, test } from 'bun:test';
import {
        minimumHammingDistance,
        minimumHammingDistance1,
} from '../../../src/problems/0000_wip/1722_minimize-hamming-distance-after-swap-operations.js';

const testcases = [
        {
                source: [1, 2, 3, 4],
                target: [2, 1, 4, 5],
                allowedSwaps: [
                        [0, 1],
                        [2, 3],
                ],
                expected: 1,
        },
        {
                source: [1, 2, 3, 4],
                target: [1, 3, 2, 4],
                allowedSwaps: [],
                expected: 2,
        },
        {
                source: [5, 1, 2, 4, 3],
                target: [1, 5, 4, 2, 3],
                allowedSwaps: [
                        [0, 4],
                        [4, 2],
                        [1, 3],
                        [1, 4],
                ],
                expected: 0,
        },
        {
                source: [1, 2, 3, 4],
                target: [2, 1, 4, 5],
                allowedSwaps: [
                        [0, 1],
                        [2, 3],
                ],
                expected: 1,
        },
        {
                source: [5, 1, 2, 4, 3],
                target: [1, 5, 4, 2, 3],
                allowedSwaps: [
                        [0, 4],
                        [4, 2],
                        [1, 4],
                ],
                expected: 2,
        },
        {
                source: [1, 2, 3, 4, 4],
                target: [2, 1, 4, 5, 4],
                allowedSwaps: [
                        [0, 1],
                        [2, 3],
                ],
                expected: 1,
        },
        {
                source: [
                        50, 46, 54, 35, 18, 42, 26, 72, 75, 47, 50, 4, 54, 21,
                        18, 18, 61, 64, 100, 14,
                ],
                target: [
                        83, 34, 43, 73, 61, 94, 10, 68, 74, 31, 54, 46, 28, 60,
                        18, 18, 4, 44, 79, 92,
                ],
                allowedSwaps: [
                        [1, 8],
                        [14, 17],
                        [3, 1],
                        [17, 10],
                        [18, 2],
                        [7, 12],
                        [11, 3],
                        [1, 15],
                        [13, 17],
                        [18, 19],
                        [0, 10],
                        [15, 19],
                        [0, 15],
                        [6, 7],
                        [7, 15],
                        [19, 4],
                        [7, 16],
                        [14, 18],
                        [8, 10],
                        [17, 0],
                        [2, 13],
                        [14, 10],
                        [12, 17],
                        [2, 9],
                        [6, 15],
                        [16, 18],
                        [2, 16],
                        [2, 6],
                        [4, 5],
                        [17, 5],
                        [10, 13],
                        [7, 2],
                        [9, 16],
                        [15, 5],
                        [0, 5],
                        [8, 0],
                        [11, 12],
                        [9, 7],
                        [1, 0],
                        [11, 17],
                        [4, 6],
                        [5, 7],
                        [19, 12],
                        [3, 18],
                        [19, 1],
                        [13, 18],
                        [19, 6],
                        [13, 6],
                        [6, 1],
                        [4, 2],
                ],
                expected: 14,
        },
];

describe.skip('minimumHammingDistance', () => {
        test.each(
                structuredClone(testcases),
        )('minimumHammingDistance($source, $target, $allowedSwaps) -> $expected', ({
                source,
                target,
                allowedSwaps,
                expected,
        }) => {
                expect(
                        minimumHammingDistance(source, target, allowedSwaps),
                ).toStrictEqual(expected);
        });
});

describe.skip('minimumHammingDistance1', () => {
        test.each(
                structuredClone(testcases),
        )('minimumHammingDistance1($source, $target, $allowedSwaps) -> $expected', ({
                source,
                target,
                allowedSwaps,
                expected,
        }) => {
                expect(
                        minimumHammingDistance1(source, target, allowedSwaps),
                ).toStrictEqual(expected);
        });
});
