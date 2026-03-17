import { describe, expect, test } from 'bun:test';
import { canPlaceFlowers } from '../../../src/problems/0601-0700/0605_can-place-flowers.js';

const testcases = [
        { flowerbed: [1, 0, 0, 0, 1], n: 1, expected: true },
        { flowerbed: [1, 0, 0, 0, 1], n: 2, expected: false },
        { flowerbed: [0, 0, 1, 0, 1], n: 1, expected: true },
        { flowerbed: [1, 0, 1, 0, 0], n: 1, expected: true },
];

describe('canPlaceFlowers', () => {
        test.each(
                structuredClone(testcases),
        )('canPlaceFlowers($flowerbed, $n) -> $expected', ({
                flowerbed,
                n,
                expected,
        }) => {
                expect(canPlaceFlowers(flowerbed, n)).toStrictEqual(expected);
        });
});
