import { describe, expect, test } from 'bun:test';
import {
        maxProfit,
        maxProfit1,
} from '../../../src/problems/0101-0200/0121_best-time-to-buy-and-sell-stock.js';

const testcases = [
        { prices: [7, 1, 5, 3, 6, 4], expected: 5 },
        { prices: [7, 6, 4, 3, 1], expected: 0 },
        { prices: [7, 1, 7, 3, 6, 4], expected: 6 },
];

describe('maxProfit', () => {
        test.each(
                structuredClone(testcases),
        )('maxProfit($prices) -> $expected', ({ prices, expected }) => {
                expect(maxProfit(prices)).toStrictEqual(expected);
        });
});

describe('maxProfit1', () => {
        test.each(
                structuredClone(testcases),
        )('maxProfit1($prices) -> $expected', ({ prices, expected }) => {
                expect(maxProfit1(prices)).toStrictEqual(expected);
        });
});
