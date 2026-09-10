import { describe, expect, test } from 'bun:test';

import { maximumMinutes } from '../../../src/problems/2201-2300/2258_escape-the-spreading-fire.js';

const testcases = [
        {
                grid: [
                        [0, 2, 0, 0, 0, 0, 0],
                        [0, 0, 0, 2, 2, 1, 0],
                        [0, 2, 0, 0, 1, 2, 0],
                        [0, 0, 2, 2, 2, 0, 2],
                        [0, 0, 0, 0, 0, 0, 0],
                ],
                expected: 3,
        },
        {
                grid: [
                        [0, 0, 0, 0],
                        [0, 1, 2, 0],
                        [0, 2, 0, 0],
                ],
                expected: -1,
        },
        {
                grid: [
                        [0, 0, 0],
                        [2, 2, 0],
                        [1, 2, 0],
                ],
                expected: 1_000_000_000,
        },
        {
                grid: [
                        [0, 2, 0, 0, 1],
                        [0, 2, 0, 2, 2],
                        [0, 2, 0, 0, 0],
                        [0, 0, 2, 2, 0],
                        [0, 0, 0, 0, 0],
                ],
                expected: 0,
        },
        {
                grid: [
                        [0, 1],
                        [0, 2],
                        [0, 0],
                        [2, 0],
                ],
                expected: 0,
        },
];

describe('maximumMinutes', () => {
        test.each(structuredClone(testcases))(
                'maximumMinutes($grid) -> $expected',
                ({ grid, expected }) => {
                        expect(maximumMinutes(grid)).toStrictEqual(expected);
                },
        );
});
