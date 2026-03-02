import { describe, expect, test } from 'bun:test';
import { maxProfit } from '../../../src/problems/solved/0122_best-time-to-buy-and-sell-stock-ii.js';

describe('maxProfit', () => {
        test('basic test 1', () => {
                expect(maxProfit([7, 1, 5, 3, 6, 4])).toStrictEqual(7);
        });

        test('basic test 2', () => {
                expect(maxProfit([1, 2, 3, 4, 5])).toStrictEqual(4);
        });

        test('basic test 3', () => {
                expect(maxProfit([7, 6, 4, 3, 1])).toStrictEqual(0);
        });
});
