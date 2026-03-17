import { describe, expect, test } from 'bun:test';
import { carFleet } from '../../../src/problems/0801-0900/0853_car-fleet.js';

const testcases = [
        {
                target: 12,
                position: [10, 8, 0, 5, 3],
                speed: [2, 4, 1, 1, 3],
                expected: 3,
        },
        { target: 10, position: [3], speed: [3], expected: 1 },
        { target: 100, position: [0, 2, 4], speed: [4, 2, 1], expected: 1 },
];

describe('carFleet', () => {
        test.each(
                testcases,
        )('carFleet($target, $position, $speed) -> $expected', ({
                target,
                position,
                speed,
                expected,
        }) => {
                expect(carFleet(target, position, speed)).toStrictEqual(
                        expected,
                );
        });
});
