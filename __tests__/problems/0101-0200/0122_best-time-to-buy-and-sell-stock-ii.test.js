import { describe, expect, test } from 'bun:test';
import { maxProfit } from '../../../src/problems/0101-0200/0122_best-time-to-buy-and-sell-stock-ii.js';

const testcases = [
        { prices: [7, 1, 5, 3, 6, 4], expected: 7 },
        { prices: [1, 2, 3, 4, 5], expected: 4 },
        { prices: [7, 6, 4, 3, 1], expected: 0 },
];

describe('maxProfit', () => {
        test.each(
                structuredClone(testcases),
        )('maxProfit($prices) -> $expected', ({ prices, expected }) => {
                expect(maxProfit(prices)).toStrictEqual(expected);
        });
});
