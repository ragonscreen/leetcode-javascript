import { describe, expect, test } from 'bun:test';

import { closedIsland } from './1254_number-of-closed-islands.js';

const testcases = [
        {
                grid: [
                        [1, 1, 1, 1, 1, 1, 1, 0],
                        [1, 0, 0, 0, 0, 1, 1, 0],
                        [1, 0, 1, 0, 1, 1, 1, 0],
                        [1, 0, 0, 0, 0, 1, 0, 1],
                        [1, 1, 1, 1, 1, 1, 1, 0],
                ],
                expected: 2,
        },
        {
                grid: [
                        [0, 0, 1, 0, 0],
                        [0, 1, 0, 1, 0],
                        [0, 1, 1, 1, 0],
                ],
                expected: 1,
        },
        {
                grid: [
                        [1, 1, 1, 1, 1, 1, 1],
                        [1, 0, 0, 0, 0, 0, 1],
                        [1, 0, 1, 1, 1, 0, 1],
                        [1, 0, 1, 0, 1, 0, 1],
                        [1, 0, 1, 1, 1, 0, 1],
                        [1, 0, 0, 0, 0, 0, 1],
                        [1, 1, 1, 1, 1, 1, 1],
                ],
                expected: 2,
        },
];

describe('closedIsland', () => {
        test.each(structuredClone(testcases))(
                'closedIsland($grid) -> $expected',
                ({ grid, expected }) => {
                        expect(closedIsland(grid)).toStrictEqual(expected);
                },
        );
});
