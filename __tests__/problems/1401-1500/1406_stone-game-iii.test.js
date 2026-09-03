import { describe, expect, test } from 'bun:test';

import { stoneGameIII } from '../../../src/problems/1401-1500/1406_stone-game-iii.js';

const testcases = [
        { stoneValue: [1, 2, 3, 7], expected: 'Bob' },
        { stoneValue: [1, 2, 3, -9], expected: 'Alice' },
        { stoneValue: [1, 2, 3, 6], expected: 'Tie' },
];

describe('stoneGameIII', () => {
        test.each(structuredClone(testcases))(
                'stoneGameIII($stoneValue) -> $expected',
                ({ stoneValue, expected }) => {
                        expect(stoneGameIII(stoneValue)).toStrictEqual(expected);
                },
        );
});
