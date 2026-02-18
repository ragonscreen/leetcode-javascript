import { describe, expect, test } from 'bun:test';
import { asteroidCollision } from '../../../src/problems/solved/0735_asteroid-collision.js';

describe('asteroidCollision', () => {
        test('basic test 1', () => {
                expect(asteroidCollision([5, 10, -5])).toStrictEqual([5, 10]);
        });

        test('basic test 2', () => {
                expect(asteroidCollision([8, -8])).toStrictEqual([]);
        });

        test('basic test 3', () => {
                expect(asteroidCollision([10, 2, -5])).toStrictEqual([10]);
        });

        test('basic test 4', () => {
                expect(asteroidCollision([3, 5, -6, 2, -1, 4])).toStrictEqual([
                        -6, 2, 4,
                ]);
        });

        test('basic test 5', () => {
                expect(asteroidCollision([-2, -2, 1, -2])).toStrictEqual([
                        -2, -2, -2,
                ]);
        });
});
