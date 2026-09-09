import { describe, expect, test } from 'bun:test';

import { maxAreaOfIsland } from '../../../src/problems/0601-0700/0695_max-area-of-island.js';

const testcases = [
        {
                grid: [
                        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
                        [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
                        [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
                ],
                expected: 6,
        },
        { grid: [[0, 0, 0, 0, 0, 0, 0, 0]], expected: 0 },
];

describe('maxAreaOfIsland', () => {
        test.each(structuredClone(testcases))(
                'maxAreaOfIsland($grid) -> $expected',
                ({ grid, expected }) => {
                        expect(maxAreaOfIsland(grid)).toStrictEqual(expected);
                },
        );
});
