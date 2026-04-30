import { describe, expect, test } from 'bun:test';
import { arrangeCoins } from '../../../src/problems/0401-0500/0441_arranging-coins.js';

const testcases = [
        { n: 5, expected: 2 },
        { n: 8, expected: 3 },
];

describe('arrangeCoins', () => {
        test.each(
                structuredClone(testcases),
        )('arrangeCoins($n) -> $expected', ({ n, expected }) => {
                expect(arrangeCoins(n)).toStrictEqual(expected);
        });
});
