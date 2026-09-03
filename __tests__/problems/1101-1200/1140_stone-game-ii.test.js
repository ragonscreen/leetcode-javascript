import { describe, expect, test } from 'bun:test';

import { stoneGameII, stoneGameII1 } from '../../../src/problems/1101-1200/1140_stone-game-ii.js';

const testcases = [
        { piles: [2, 7, 9, 4, 4], expected: 10 },
        { piles: [1, 2, 3, 4, 5, 100], expected: 104 },
];

describe('stoneGameII', () => {
        test.each(structuredClone(testcases))(
                'stoneGameII($piles) -> $expected',
                ({ piles, expected }) => {
                        expect(stoneGameII(piles)).toStrictEqual(expected);
                },
        );
});

describe('stoneGameII1', () => {
        test.each(structuredClone(testcases))(
                'stoneGameII1($piles) -> $expected',
                ({ piles, expected }) => {
                        expect(stoneGameII1(piles)).toStrictEqual(expected);
                },
        );
});
