import { describe, expect, test } from 'bun:test';
import { minStoneSum } from '../../../src/problems/1901-2000/1962_remove-stones-to-minimize-the-total.js';

const testcases = [
        { piles: [5, 4, 9], k: 2, expected: 12 },
        { piles: [4, 3, 6, 7], k: 3, expected: 12 },
        { piles: [1], k: 100_000, expected: 1 },
        {
                piles: [
                        8011, 8387, 6007, 1235, 5595, 138, 3136, 1740, 963,
                        9412, 802, 4475, 9695, 3713, 1742, 8559, 2237, 4356,
                        4012, 3449, 990, 6930, 523, 931, 5937, 5902, 2817, 4088,
                        385, 1359, 1888, 1106, 416, 670, 347, 6113, 4190, 2094,
                        2575, 3011, 8571, 32, 6318, 9658, 708, 4061, 2481, 595,
                        69,
                ],
                k: 93,
                expected: 29_912,
        },
];

describe('minStoneSum', () => {
        test.each(
                structuredClone(testcases),
        )('minStoneSum($piles, $k) -> $expected', ({ piles, k, expected }) => {
                expect(minStoneSum(piles, k)).toStrictEqual(expected);
        });
});
