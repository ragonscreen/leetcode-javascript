import { describe, expect, test } from 'bun:test';
import { asteroidCollision } from '../../../src/problems/0701-0800/0735_asteroid-collision.js';

const testcases = [
        { asteroids: [5, 10, -5], expected: [5, 10] },
        { asteroids: [8, -8], expected: [] },
        { asteroids: [10, 2, -5], expected: [10] },
        { asteroids: [3, 5, -6, 2, -1, 4], expected: [-6, 2, 4] },
];

describe('asteroidCollision', () => {
        test.each(
                structuredClone(testcases),
        )('asteroidCollision($asteroids) -> $expected', ({
                asteroids,
                expected,
        }) => {
                expect(asteroidCollision(asteroids)).toStrictEqual(expected);
        });
});
