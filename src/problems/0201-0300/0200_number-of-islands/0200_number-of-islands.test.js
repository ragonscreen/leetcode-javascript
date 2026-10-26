import { describe, expect, test } from 'bun:test';

import { numIslands } from './0200_number-of-islands.js';

const testcases = [
        {
                grid: [
                        ['1', '1', '1', '1', '0'],
                        ['1', '1', '0', '1', '0'],
                        ['1', '1', '0', '0', '0'],
                        ['0', '0', '0', '0', '0'],
                ],
                expected: 1,
        },
        {
                grid: [
                        ['1', '1', '0', '0', '0'],
                        ['1', '1', '0', '0', '0'],
                        ['0', '0', '1', '0', '0'],
                        ['0', '0', '0', '1', '1'],
                ],
                expected: 3,
        },
];

describe('numIslands', () => {
        test.each(structuredClone(testcases))(
                'numIslands($grid) -> $expected',
                ({ grid, expected }) => {
                        expect(numIslands(grid)).toStrictEqual(expected);
                },
        );
});
