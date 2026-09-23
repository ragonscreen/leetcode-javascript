import { describe, expect, test } from 'bun:test';

import { highestRankedKItems } from '../../../src/problems/2101-2200/2146_k-highest-ranked-items-within-a-price-range.js';

const testcases = [
        {
                grid: [
                        [1, 2, 0, 1],
                        [1, 3, 0, 1],
                        [0, 2, 5, 1],
                ],
                pricing: [2, 5],
                start: [0, 0],
                k: 3,
                expected: [
                        [0, 1],
                        [1, 1],
                        [2, 1],
                ],
        },
        {
                grid: [
                        [1, 2, 0, 1],
                        [1, 3, 3, 1],
                        [0, 2, 5, 1],
                ],
                pricing: [2, 3],
                start: [2, 3],
                k: 2,
                expected: [
                        [2, 1],
                        [1, 2],
                ],
        },
        {
                grid: [
                        [1, 1, 1],
                        [0, 0, 1],
                        [2, 3, 4],
                ],
                pricing: [2, 3],
                start: [0, 0],
                k: 3,
                expected: [
                        [2, 1],
                        [2, 0],
                ],
        },
        {
                grid: [[0, 2, 0]],
                pricing: [2, 2],
                start: [0, 1],
                k: 1,
                expected: [[0, 1]],
        },
];

describe('highestRankedKItems', () => {
        test.each(structuredClone(testcases))(
                'highestRankedKItems($grid, $pricing, $start, $k) -> $expected',
                ({ grid, pricing, start, k, expected }) => {
                        expect(highestRankedKItems(grid, pricing, start, k)).toStrictEqual(
                                expected,
                        );
                },
        );
});
