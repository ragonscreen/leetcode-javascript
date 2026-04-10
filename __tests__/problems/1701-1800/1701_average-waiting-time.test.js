import { describe, expect, test } from 'bun:test';
import { averageWaitingTime } from '../../../src/problems/1701-1800/1701_average-waiting-time.js';

const testcases = [
        {
                customers: [
                        [1, 2],
                        [2, 5],
                        [4, 3],
                ],
                expected: 5,
        },
        {
                customers: [
                        [5, 2],
                        [5, 4],
                        [10, 3],
                        [20, 1],
                ],
                expected: 3.25,
        },
];

describe('averageWaitingTime', () => {
        test.each(
                structuredClone(testcases),
        )('averageWaitingTime($customers) -> $expected', ({
                customers,
                expected,
        }) => {
                expect(averageWaitingTime(customers)).toBeCloseTo(expected);
        });
});
