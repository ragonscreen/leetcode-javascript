import { describe, expect, test } from 'bun:test';

import {
        numEnclaves,
        numEnclaves1,
} from '../../../src/problems/1001-1100/1020_number-of-enclaves.js';

const testcases = [
        {
                grid: [
                        [0, 0, 0, 0],
                        [1, 0, 1, 0],
                        [0, 1, 1, 0],
                        [0, 0, 0, 0],
                ],
                expected: 3,
        },
        {
                grid: [
                        [0, 1, 1, 0],
                        [0, 0, 1, 0],
                        [0, 0, 1, 0],
                        [0, 0, 0, 0],
                ],
                expected: 0,
        },
];

describe('numEnclaves', () => {
        test.each(structuredClone(testcases))(
                'numEnclaves($grid) -> $expected',
                ({ grid, expected }) => {
                        expect(numEnclaves(grid)).toStrictEqual(expected);
                },
        );
});

describe('numEnclaves1', () => {
        test.each(structuredClone(testcases))(
                'numEnclaves1($grid) -> $expected',
                ({ grid, expected }) => {
                        expect(numEnclaves1(grid)).toStrictEqual(expected);
                },
        );
});
