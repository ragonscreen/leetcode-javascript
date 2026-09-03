import { describe, expect, test } from 'bun:test';

import { maxNumberOfFamilies } from '../../../src/problems/1301-1400/1386_cinema-seat-allocation.js';

const testcases = [
        {
                n: 3,
                reservedSeats: [
                        [1, 2],
                        [1, 3],
                        [1, 8],
                        [2, 6],
                        [3, 1],
                        [3, 10],
                ],
                expected: 4,
        },
        {
                n: 2,
                reservedSeats: [
                        [2, 1],
                        [1, 8],
                        [2, 6],
                ],
                expected: 2,
        },
        {
                n: 4,
                reservedSeats: [
                        [4, 3],
                        [1, 4],
                        [4, 6],
                        [1, 7],
                ],
                expected: 4,
        },
];

describe('maxNumberOfFamilies', () => {
        test.each(structuredClone(testcases))(
                'maxNumberOfFamilies($n, $reservedSeats) -> $expected',
                ({ n, reservedSeats, expected }) => {
                        expect(maxNumberOfFamilies(n, reservedSeats)).toStrictEqual(expected);
                },
        );
});
