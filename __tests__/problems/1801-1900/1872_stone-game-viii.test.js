import { describe, expect, test } from 'bun:test';
import { stoneGameVIII } from '../../../src/problems/1801-1900/1872_stone-game-viii.js';

const testcases = [
        { stones: [-1, 2, -3, 4, -5], expected: 5 },
        { stones: [7, -6, 5, 10, 5, -2, -6], expected: 13 },
        { stones: [-10, -12], expected: -22 },
        {
                stones: [
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0,
                ],
                expected: 0,
        },
];

describe('stoneGameVIII', () => {
        test.each(
                structuredClone(testcases),
        )('stoneGameVIII($stones) -> $expected', ({ stones, expected }) => {
                expect(stoneGameVIII(stones)).toStrictEqual(expected);
        });
});
