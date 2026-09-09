import { describe, expect, test } from 'bun:test';

import { maximumDetonation } from '../../../src/problems/2101-2200/2101_detonate-the-maximum-bombs.js';

const testcases = [
        {
                bombs: [
                        [2, 1, 3],
                        [6, 1, 4],
                ],
                expected: 2,
        },
        {
                bombs: [
                        [1, 1, 5],
                        [10, 10, 5],
                ],
                expected: 1,
        },
        {
                bombs: [
                        [1, 2, 3],
                        [2, 3, 1],
                        [3, 4, 2],
                        [4, 5, 3],
                        [5, 6, 4],
                ],
                expected: 5,
        },
        {
                bombs: [
                        [37_207, 2653, 5261],
                        [40_784, 59_523, 20_635],
                        [16_390, 1426, 39_102],
                        [42_236, 12, 96_855],
                        [72_839, 62_027, 61_667],
                        [60_691, 58_191, 48_447],
                        [42_932, 46_579, 41_248],
                        [35_868, 43_119, 6870],
                        [41_693, 98_905, 17_374],
                        [43_441, 1266, 41_621],
                ],
                expected: 10,
        },
];

describe('maximumDetonation', () => {
        test.each(structuredClone(testcases))(
                'maximumDetonation($bombs) -> $expected',
                ({ bombs, expected }) => {
                        expect(maximumDetonation(bombs)).toStrictEqual(expected);
                },
        );
});
