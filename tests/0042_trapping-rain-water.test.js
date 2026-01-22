import { describe, expect, test } from 'vitest';
import { trap } from '../src/problems/solved/0042_trapping-rain-water.js';

describe('trap', () => {
        test('basic test 1', () => {
                expect(
                        trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]),
                ).toStrictEqual(6);
        });

        test('basic test 2', () => {
                expect(trap([4, 2, 0, 3, 2, 5])).toStrictEqual(9);
        });
});
