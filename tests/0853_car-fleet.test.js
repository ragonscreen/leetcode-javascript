import { describe, expect, test } from 'vitest';
import carFleet from '../src/problems/solved/0853_car-fleet.js';

describe('carFleet', () => {
        test('basic test 1', () => {
                expect(
                        carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]),
                ).toStrictEqual(3);
        });

        test('basic test 2', () => {
                expect(carFleet(10, [3], [3])).toStrictEqual(1);
        });

        test('basic test 3', () => {
                expect(carFleet(100, [0, 2, 4], [4, 2, 1])).toStrictEqual(1);
        });
});
