import { describe, expect, test } from 'bun:test';
import {
        maxProfit,
        maxProfit1,
        maxProfit2,
} from '../../../src/problems/solved/0121_best-time-to-buy-and-sell-stock.js';

describe('maxProfit', () => {
        describe('maxProfit', () => {
                test('basic test 1', () => {
                        expect(maxProfit([7, 1, 5, 3, 6, 4])).toStrictEqual(5);
                });

                test('basic test 2', () => {
                        expect(maxProfit([7, 6, 4, 3, 1])).toStrictEqual(0);
                });

                test('custom test 1', () => {
                        expect(maxProfit([7, 1, 7, 3, 6, 4])).toStrictEqual(6);
                });
        });

        describe('maxProfit1', () => {
                test('basic test 1', () => {
                        expect(maxProfit1([7, 1, 5, 3, 6, 4])).toStrictEqual(5);
                });

                test('basic test 2', () => {
                        expect(maxProfit1([7, 6, 4, 3, 1])).toStrictEqual(0);
                });

                test('custom test 1', () => {
                        expect(maxProfit1([7, 1, 7, 3, 6, 4])).toStrictEqual(6);
                });
        });

        describe('maxProfit2', () => {
                test('basic test 1', () => {
                        expect(maxProfit2([7, 1, 5, 3, 6, 4])).toStrictEqual(5);
                });

                test('basic test 2', () => {
                        expect(maxProfit2([7, 6, 4, 3, 1])).toStrictEqual(0);
                });

                test('custom test 1', () => {
                        expect(maxProfit2([7, 1, 7, 3, 6, 4])).toStrictEqual(6);
                });
        });
});
