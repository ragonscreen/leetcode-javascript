import { describe, expect, test } from 'bun:test';

import { countIslands } from './3619_count-islands-with-total-value-divisible-by-k.js';

const testcases = [
        {
                grid: [
                        [0, 2, 1, 0, 0],
                        [0, 5, 0, 0, 5],
                        [0, 0, 1, 0, 0],
                        [0, 1, 4, 7, 0],
                        [0, 2, 0, 0, 8],
                ],
                k: 5,
                expected: 2,
        },
        {
                grid: [
                        [3, 0, 3, 0],
                        [0, 3, 0, 3],
                        [3, 0, 3, 0],
                ],
                k: 3,
                expected: 6,
        },
];

describe('countIslands', () => {
        test.each(structuredClone(testcases))(
                'countIslands($grid, $k) -> $expected',
                ({ grid, k, expected }) => {
                        expect(countIslands(grid, k)).toStrictEqual(expected);
                },
        );
});
