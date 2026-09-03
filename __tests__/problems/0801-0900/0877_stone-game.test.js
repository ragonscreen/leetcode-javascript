import { describe, expect, test } from 'bun:test';

import { stoneGame } from '../../../src/problems/0801-0900/0877_stone-game.js';

const testcases = [
        { piles: [5, 3, 4, 5], expected: true },
        { piles: [3, 7, 2, 3], expected: true },
];

describe('stoneGame', () => {
        test.each(structuredClone(testcases))(
                'stoneGame($piles) -> $expected',
                ({ piles, expected }) => {
                        expect(stoneGame(piles)).toStrictEqual(expected);
                },
        );
});
