import { describe, expect, test } from 'bun:test';
import { stoneGameIX } from '../../../src/problems/2001-2100/2029_stone-game-ix.js';

const testcases = [
        { stones: [2, 1], expected: true },
        { stones: [2], expected: false },
        { stones: [5, 1, 2, 4, 3], expected: false },
];

describe('stoneGameIX', () => {
        test.each(
                structuredClone(testcases),
        )('stoneGameIX($stones) -> $expected', ({ stones, expected }) => {
                expect(stoneGameIX(stones)).toStrictEqual(expected);
        });
});
