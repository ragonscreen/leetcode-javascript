import { describe, expect, test } from 'bun:test';
import { maxSatisfied } from '../../../src/problems/1001-1100/1052_grumpy-bookstore-owner.js';

const testcases = [
        {
                customers: [1, 0, 1, 2, 1, 1, 7, 5],
                grumpy: [0, 1, 0, 1, 0, 1, 0, 1],
                minutes: 3,
                expected: 16,
        },
        { customers: [1], grumpy: [0], minutes: 1, expected: 1 },
        {
                customers: [5, 5, 5, 5, 12, 12, 12, 12],
                grumpy: [1, 1, 1, 1, 0, 0, 0, 0],
                minutes: 3,
                expected: 63,
        },
        {
                customers: [5, 8],
                grumpy: [0, 1],
                minutes: 1,
                expected: 13,
        },
        {
                customers: [2, 6, 6, 9],
                grumpy: [0, 0, 1, 1],
                minutes: 1,
                expected: 17,
        },
];

describe('maxSatisfied', () => {
        test.each(
                structuredClone(testcases),
        )('maxSatisfied($customers, $grumpy, $minutes) -> $expected', ({
                customers,
                grumpy,
                minutes,
                expected,
        }) => {
                expect(maxSatisfied(customers, grumpy, minutes)).toStrictEqual(
                        expected,
                );
        });
});
