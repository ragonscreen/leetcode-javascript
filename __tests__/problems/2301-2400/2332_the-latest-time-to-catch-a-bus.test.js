import { describe, expect, test } from 'bun:test';
import { latestTimeCatchTheBus } from '../../../src/problems/2301-2400/2332_the-latest-time-to-catch-a-bus.js';

const testcases = [
        {
                buses: [10, 20],
                passengers: [2, 17, 18, 19],
                capacity: 2,
                expected: 16,
        },
        {
                buses: [20, 30, 10],
                passengers: [19, 13, 26, 4, 25, 11, 21],
                capacity: 2,
                expected: 20,
        },
        {
                buses: [3],
                passengers: [2, 4],
                capacity: 2,
                expected: 3,
        },
        {
                buses: [2],
                passengers: [2],
                capacity: 2,
                expected: 1,
        },
];

describe('latestTimeCatchTheBus', () => {
        test.each(
                structuredClone(testcases),
        )('latestTimeCatchTheBus($buses, $passengers, $capacity) -> $expected', ({
                buses,
                passengers,
                capacity,
                expected,
        }) => {
                expect(
                        latestTimeCatchTheBus(buses, passengers, capacity),
                ).toStrictEqual(expected);
        });
});
