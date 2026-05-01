import { describe, expect, test } from 'bun:test';
import { numBusesToDestination } from '../../../src/problems/0801-0900/0815_bus-routes.js';

const testcases = [
        {
                routes: [
                        [1, 2, 7],
                        [3, 6, 7],
                ],
                source: 7,
                target: 9,
                expected: -1,
        },
        {
                routes: [
                        [1, 2, 7],
                        [3, 6, 7],
                ],
                source: 1,
                target: 6,
                expected: 2,
        },
        {
                routes: [[7, 12], [4, 5, 15], [6], [15, 19], [9, 12, 13]],
                source: 15,
                target: 12,
                expected: -1,
        },
        {
                routes: [
                        [1, 7],
                        [3, 5],
                ],
                source: 5,
                target: 5,
                expected: 0,
        },
        {
                routes: [[1, 2]],
                source: 1,
                target: 2,
                expected: 1,
        },
        {
                routes: [
                        [1, 2, 7],
                        [3, 6, 7],
                ],
                source: 8,
                target: 6,
                expected: -1,
        },
];

describe('numBusesToDestination', () => {
        test.each(
                structuredClone(testcases),
        )('numBusesToDestination($routes, $source, $target) -> $expected', ({
                routes,
                source,
                target,
                expected,
        }) => {
                expect(
                        numBusesToDestination(routes, source, target),
                ).toStrictEqual(expected);
        });
});
