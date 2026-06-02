import { describe, expect, test } from 'bun:test';
import { earliestFinishTime } from '../../../src/problems/3601-3700/3633_earliest-finish-time-for-land-and-water-rides-i.js';

const testcases = [
        {
                landStartTime: [2, 8],
                landDuration: [4, 1],
                waterStartTime: [6],
                waterDuration: [3],
                expected: 9,
        },
        {
                landStartTime: [5],
                landDuration: [3],
                waterStartTime: [1],
                waterDuration: [10],
                expected: 14,
        },
        {
                landStartTime: [2, 2],
                landDuration: [4, 1],
                waterStartTime: [5],
                waterDuration: [3],
                expected: 8,
        },
];

describe('earliestFinishTime', () => {
        test.each(
                structuredClone(testcases),
        )('earliestFinishTime($landStartTime, $landDuration, $waterStartTime, $waterDuration) -> $expected', ({
                landStartTime,
                landDuration,
                waterStartTime,
                waterDuration,
                expected,
        }) => {
                expect(
                        earliestFinishTime(
                                landStartTime,
                                landDuration,
                                waterStartTime,
                                waterDuration,
                        ),
                ).toStrictEqual(expected);
        });
});
