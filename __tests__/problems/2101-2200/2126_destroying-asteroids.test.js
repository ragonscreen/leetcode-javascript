import { describe, expect, test } from 'bun:test';
import { asteroidsDestroyed } from '../../../src/problems/2101-2200/2126_destroying-asteroids.js';

const testcases = [
        { mass: 10, asteroids: [3, 9, 19, 5, 21], expected: true },
        { mass: 5, asteroids: [4, 9, 23, 4], expected: false },
];

describe('asteroidsDestroyed', () => {
        test.each(
                structuredClone(testcases),
        )('asteroidsDestroyed($mass, $asteroids) -> $expected', ({
                mass,
                asteroids,
                expected,
        }) => {
                expect(asteroidsDestroyed(mass, asteroids)).toStrictEqual(
                        expected,
                );
        });
});
