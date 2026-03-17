import { describe, expect, test } from 'bun:test';
import { StockSpanner } from '../../../src/problems/0901-1000/0901_online-stock-span.js';

describe('StockSpanner', () => {
        test('default test 1', () => {
                const stockSpanner = new StockSpanner();

                expect(stockSpanner.next(100)).toStrictEqual(1);
                expect(stockSpanner.next(80)).toStrictEqual(1);
                expect(stockSpanner.next(60)).toStrictEqual(1);
                expect(stockSpanner.next(70)).toStrictEqual(2);
                expect(stockSpanner.next(60)).toStrictEqual(1);
                expect(stockSpanner.next(75)).toStrictEqual(4);
                expect(stockSpanner.next(85)).toStrictEqual(6);
        });

        test('basic test 2', () => {
                const stockSpanner = new StockSpanner();

                expect(stockSpanner.next(28)).toStrictEqual(1);
                expect(stockSpanner.next(14)).toStrictEqual(1);
                expect(stockSpanner.next(28)).toStrictEqual(3);
                expect(stockSpanner.next(35)).toStrictEqual(4);
                expect(stockSpanner.next(46)).toStrictEqual(5);
                expect(stockSpanner.next(53)).toStrictEqual(6);
                expect(stockSpanner.next(66)).toStrictEqual(7);
                expect(stockSpanner.next(80)).toStrictEqual(8);
                expect(stockSpanner.next(87)).toStrictEqual(9);
                expect(stockSpanner.next(88)).toStrictEqual(10);
        });
});
