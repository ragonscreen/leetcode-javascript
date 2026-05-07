import { describe, expect, test } from 'bun:test';
import {
        arrangeCoins,
        arrangeCoins1,
} from '../../../src/problems/0401-0500/0441_arranging-coins.js';

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

describe('arrangeCoins1', () => {
        test.each(
                structuredClone(testcases),
        )('arrangeCoins1($n) -> $expected', ({ n, expected }) => {
                expect(arrangeCoins1(n)).toStrictEqual(expected);
        });
});
