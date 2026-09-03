import { describe, expect, test } from 'bun:test';
import { twoCitySchedCost } from '../../../src/problems/1001-1100/1029_two-city-scheduling.js';

const testcases = [
        {
                costs: [
                        [10, 20],
                        [30, 200],
                        [400, 50],
                        [30, 20],
                ],
                expected: 110,
        },
        {
                costs: [
                        [259, 770],
                        [448, 54],
                        [926, 667],
                        [184, 139],
                        [840, 118],
                        [577, 469],
                ],
                expected: 1859,
        },
        {
                costs: [
                        [515, 563],
                        [451, 713],
                        [537, 709],
                        [343, 819],
                        [855, 779],
                        [457, 60],
                        [650, 359],
                        [631, 42],
                ],
                expected: 3086,
        },
];

describe('twoCitySchedCost', () => {
        test.each(
                structuredClone(testcases),
        )('twoCitySchedCost($costs) -> $expected', ({ costs, expected }) => {
                expect(twoCitySchedCost(costs)).toStrictEqual(expected);
        });
});
