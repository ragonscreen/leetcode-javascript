import { describe, expect, test } from 'bun:test';
import {
        dailyTemperatures,
        dailyTemperatures1,
} from '../../../src/problems/0701-0800/0739_daily-temperatures.js';

const testcases = [
        {
                temperatures: [73, 74, 75, 71, 69, 72, 76, 73],
                expected: [1, 1, 4, 2, 1, 1, 0, 0],
        },
        { temperatures: [30, 40, 50, 60], expected: [1, 1, 1, 0] },
        { temperatures: [30, 60, 90], expected: [1, 1, 0] },
];

describe('dailyTemperatures', () => {
        test.each(
                structuredClone(testcases),
        )('dailyTemperatures($temperatures) -> $expected', ({
                temperatures,
                expected,
        }) => {
                expect(dailyTemperatures(temperatures)).toStrictEqual(expected);
        });
});

describe('dailyTemperatures1', () => {
        test.each(
                testcases,
        )('dailyTemperatures1($temperatures) -> $expected', ({
                temperatures,
                expected,
        }) => {
                expect(dailyTemperatures1(temperatures)).toStrictEqual(
                        expected,
                );
        });
});
