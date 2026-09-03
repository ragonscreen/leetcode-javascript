import { describe, expect, test } from 'bun:test';

import { bestCoordinate } from '../../../src/problems/1601-1700/1620_coordinate-with-maximum-network-quality.js';

const testcases = [
        {
                towers: [
                        [1, 2, 5],
                        [2, 1, 7],
                        [3, 1, 9],
                ],
                radius: 2,
                expected: [2, 1],
        },
        { towers: [[23, 11, 21]], radius: 9, expected: [23, 11] },
        {
                towers: [
                        [1, 2, 13],
                        [2, 1, 7],
                        [0, 1, 9],
                ],
                radius: 2,
                expected: [1, 2],
        },
        {
                towers: [[42, 0, 0]],
                radius: 7,
                expected: [0, 0],
        },
];

describe('bestCoordinate', () => {
        test.each(structuredClone(testcases))(
                'bestCoordinate($towers, $radius) -> $expected',
                ({ towers, radius, expected }) => {
                        expect(bestCoordinate(towers, radius)).toStrictEqual(expected);
                },
        );
});
