import { describe, expect, test } from 'bun:test';
import { minEnergy } from '../../../src/problems/3901-4000/3951_minimum-energy-to-maintain-brightness.js';

const testcases = [
        { n: 5, brightness: 5, intervals: [[6, 12]], expected: 14 },
        {
                n: 2,
                brightness: 1,
                intervals: [
                        [0, 0],
                        [2, 2],
                ],
                expected: 2,
        },
        {
                n: 4,
                brightness: 2,
                intervals: [
                        [1, 3],
                        [2, 4],
                ],
                expected: 4,
        },
];

describe('minEnergy', () => {
        test.each(
                structuredClone(testcases),
        )('minEnergy($n, $brightness, $intervals) -> $expected', ({
                n,
                brightness,
                intervals,
                expected,
        }) => {
                expect(minEnergy(n, brightness, intervals)).toStrictEqual(
                        expected,
                );
        });
});
