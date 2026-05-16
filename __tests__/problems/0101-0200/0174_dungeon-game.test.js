import { describe, expect, test } from 'bun:test';
import { calculateMinimumHP } from '../../../src/problems/0101-0200/0174_dungeon-game.js';

const testcases = [
        { dungeon: [[-2,-3,3],[-5,-10,1],[10,30,-5]], expected: 7 },
        { dungeon: [[0]], expected: 1 },
];

describe('calculateMinimumHP', () => {
        test.each(structuredClone(testcases))('calculateMinimumHP($dungeon) -> $expected', ({ dungeon, expected }) => {
                expect(calculateMinimumHP(dungeon)).toStrictEqual(expected);
        });
});