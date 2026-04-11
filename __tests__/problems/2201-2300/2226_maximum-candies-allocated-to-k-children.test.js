import { describe, expect, test } from 'bun:test';
import { maximumCandies } from '../../../src/problems/2201-2300/2226_maximum-candies-allocated-to-k-children.js';

const testcases = [
        { candies: [5, 8, 6], k: 3, expected: 5 },
        { candies: [2, 5], k: 11, expected: 0 },
        { candies: [9, 10, 1, 2, 10, 9, 9, 10, 2, 2], k: 3, expected: 10 },
];

describe('maximumCandies', () => {
        test.each(
                structuredClone(testcases),
        )('maximumCandies($candies, $k) -> $expected', ({
                candies,
                k,
                expected,
        }) => {
                expect(maximumCandies(candies, k)).toStrictEqual(expected);
        });
});
