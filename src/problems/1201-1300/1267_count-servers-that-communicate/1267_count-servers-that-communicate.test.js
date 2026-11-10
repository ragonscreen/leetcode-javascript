import { describe, expect, test } from 'bun:test';

import { countServers } from './1267_count-servers-that-communicate.js';

const testcases = [
        {
                grid: [
                        [1, 0],
                        [0, 1],
                ],
                expected: 0,
        },
        {
                grid: [
                        [1, 0],
                        [1, 1],
                ],
                expected: 3,
        },
        {
                grid: [
                        [1, 1, 0, 0],
                        [0, 0, 1, 0],
                        [0, 0, 1, 0],
                        [0, 0, 0, 1],
                ],
                expected: 4,
        },
        {
                grid: [
                        [1, 0, 0, 1, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 1, 0],
                ],
                expected: 3,
        },
        {
                grid: [
                        [0, 0, 1, 0, 1],
                        [0, 1, 0, 1, 0],
                        [0, 1, 1, 1, 0],
                        [1, 0, 0, 1, 1],
                        [0, 0, 1, 1, 0],
                ],
                expected: 12,
        },
];

describe('countServers', () => {
        test.each(structuredClone(testcases))(
                'countServers($grid) -> $expected',
                ({ grid, expected }) => {
                        expect(countServers(grid)).toStrictEqual(expected);
                },
        );
});
