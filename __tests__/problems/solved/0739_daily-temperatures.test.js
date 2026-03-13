import { describe, expect, test } from 'bun:test';
import {
        dailyTemperatures,
        dailyTemperatures1,
} from '../../../src/problems/solved/0739_daily-temperatures.js';

describe('dailyTemperatures', () => {
        describe('dailyTemperatures', () => {
                test('basic test 1', () => {
                        expect(
                                dailyTemperatures([
                                        73, 74, 75, 71, 69, 72, 76, 73,
                                ]),
                        ).toStrictEqual([1, 1, 4, 2, 1, 1, 0, 0]);
                });

                test('basic test 2', () => {
                        expect(
                                dailyTemperatures([30, 40, 50, 60]),
                        ).toStrictEqual([1, 1, 1, 0]);
                });

                test('basic test 3', () => {
                        expect(dailyTemperatures([30, 60, 90])).toStrictEqual([
                                1, 1, 0,
                        ]);
                });
        });

        describe('dailyTemperatures1', () => {
                test('basic test 1', () => {
                        expect(
                                dailyTemperatures1([
                                        73, 74, 75, 71, 69, 72, 76, 73,
                                ]),
                        ).toStrictEqual([1, 1, 4, 2, 1, 1, 0, 0]);
                });

                test('basic test 2', () => {
                        expect(
                                dailyTemperatures1([30, 40, 50, 60]),
                        ).toStrictEqual([1, 1, 1, 0]);
                });

                test('basic test 3', () => {
                        expect(dailyTemperatures1([30, 60, 90])).toStrictEqual([
                                1, 1, 0,
                        ]);
                });
        });
});
