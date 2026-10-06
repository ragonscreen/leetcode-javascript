import { describe, expect, test } from 'bun:test';

import { canWinNim } from './0292_nim-game.js';

const testcases = [
        { n: 4, expected: false },
        { n: 1, expected: true },
        { n: 2, expected: true },
];

describe('canWinNim', () => {
        test.each(structuredClone(testcases))('canWinNim($n) -> $expected', ({ n, expected }) => {
                expect(canWinNim(n)).toStrictEqual(expected);
        });
});
