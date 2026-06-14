import { describe, expect, test } from 'bun:test';
import { maxRatings } from '../../../src/problems/3901-4000/3961_maximize-sum-of-device-ratings.js';

const testcases = [
        {
                units: [
                        [1, 3],
                        [2, 2],
                ],
                expected: 4,
        },
        {
                units: [
                        [1, 2, 3],
                        [4, 5, 6],
                ],
                expected: 6,
        },
        {
                units: [
                        [5, 5, 5],
                        [1, 1, 1],
                ],
                expected: 6,
        },
        {
                units: [[5], [5], [1], [4], [4]],
                expected: 19,
        },
];

describe('maxRatings', () => {
        test.each(
                structuredClone(testcases),
        )('maxRatings($units) -> $expected', ({ units, expected }) => {
                expect(maxRatings(units)).toStrictEqual(expected);
        });
});
