import { describe, expect, test } from 'bun:test';
import { bestTower } from '../../../src/problems/3801-3900/3809_best-reachable-tower.js';

const testcases = [
        {
                towers: [
                        [1, 2, 5],
                        [2, 1, 7],
                        [3, 1, 9],
                ],
                center: [1, 1],
                radius: 2,
                expected: [3, 1],
        },
        {
                towers: [
                        [1, 3, 4],
                        [2, 2, 4],
                        [4, 4, 7],
                ],
                center: [0, 0],
                radius: 5,
                expected: [1, 3],
        },
        {
                towers: [
                        [5, 6, 8],
                        [0, 3, 5],
                ],
                center: [1, 2],
                radius: 1,
                expected: [-1, -1],
        },
];

describe('bestTower', () => {
        test.each(
                structuredClone(testcases),
        )('bestTower($towers, $center, $radius) -> $expected', ({
                towers,
                center,
                radius,
                expected,
        }) => {
                expect(bestTower(towers, center, radius)).toStrictEqual(
                        expected,
                );
        });
});
