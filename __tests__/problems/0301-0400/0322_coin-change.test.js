import { describe, expect, test } from 'bun:test';
import { coinChange } from '../../../src/problems/0301-0400/0322_coin-change.js';

const testcases = [
        { coins: [1, 2, 5], amount: 11, expected: 3 },
        { coins: [2], amount: 3, expected: -1 },
        { coins: [1], amount: 0, expected: 0 },
        { coins: [5], amount: 5, expected: 1 },
        { coins: [1], amount: 2, expected: 2 },
];

describe('coinChange', () => {
        test.each(
                structuredClone(testcases),
        )('coinChange($coins, $amount) -> $expected', ({
                coins,
                amount,
                expected,
        }) => {
                expect(coinChange(coins, amount)).toStrictEqual(expected);
        });
});
