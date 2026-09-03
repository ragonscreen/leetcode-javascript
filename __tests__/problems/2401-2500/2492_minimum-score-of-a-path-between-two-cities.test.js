import { describe, expect, test } from 'bun:test';

import { minScore } from '../../../src/problems/2401-2500/2492_minimum-score-of-a-path-between-two-cities.js';

const testcases = [
        {
                n: 4,
                roads: [
                        [1, 2, 9],
                        [2, 3, 6],
                        [2, 4, 5],
                        [1, 4, 7],
                ],
                expected: 5,
        },
        {
                n: 4,
                roads: [
                        [1, 2, 2],
                        [1, 3, 4],
                        [3, 4, 7],
                ],
                expected: 2,
        },
        {
                n: 14,
                roads: [
                        [2, 9, 2308],
                        [2, 5, 2150],
                        [12, 3, 4944],
                        [13, 5, 5462],
                        [2, 10, 2187],
                        [2, 12, 8132],
                        [2, 13, 3666],
                        [4, 14, 3019],
                        [2, 4, 6759],
                        [2, 14, 9869],
                        [1, 10, 8147],
                        [3, 4, 7971],
                        [9, 13, 8026],
                        [5, 12, 9982],
                        [10, 9, 6459],
                ],
                expected: 2150,
        },
        {
                n: 7,
                roads: [
                        [1, 3, 1484],
                        [3, 2, 3876],
                        [2, 4, 6823],
                        [6, 7, 579],
                        [5, 6, 4436],
                        [4, 5, 8830],
                ],
                expected: 579,
        },
];

describe('minScore', () => {
        test.each(structuredClone(testcases))(
                'minScore($n, $roads) -> $expected',
                ({ n, roads, expected }) => {
                        expect(minScore(n, roads)).toStrictEqual(expected);
                },
        );
});
