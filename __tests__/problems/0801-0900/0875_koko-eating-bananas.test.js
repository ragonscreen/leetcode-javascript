import { describe, expect, test } from 'bun:test';
import { minEatingSpeed } from '../../../src/problems/0801-0900/0875_koko-eating-bananas.js';

const testcases = [
        { piles: [3, 6, 7, 11], h: 8, expected: 4 },
        { piles: [30, 11, 23, 4, 20], h: 5, expected: 30 },
        { piles: [30, 11, 23, 4, 20], h: 6, expected: 23 },
];

describe('minEatingSpeed', () => {
        test.each(
                structuredClone(testcases),
        )('minEatingSpeed($piles, $h) -> $expected', ({
                piles,
                h,
                expected,
        }) => {
                expect(minEatingSpeed(piles, h)).toStrictEqual(expected);
        });
});
