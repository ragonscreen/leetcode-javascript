import { describe, expect, test } from 'bun:test';
import { minCost } from '../../../src/problems/1501-1600/1578_minimum-time-to-make-rope-colorful.js';

const testcases = [
        // { colors: 'abaac', neededTime: [1, 2, 3, 4, 5], expected: 3 },
        // { colors: 'abc', neededTime: [1, 2, 3], expected: 0 },
        // { colors: 'aabaa', neededTime: [1, 2, 3, 4, 1], expected: 2 },
        {
                colors: 'aaaaaaaaaaaaaa',
                neededTime: [1, 3, 6, 5, 4, 5, 4, 4, 2, 8, 3, 10, 6, 6],
                expected: 57,
        },
];

describe('minCost', () => {
        test.each(
                structuredClone(testcases),
        )('minCost($colors, $neededTime) -> $expected', ({
                colors,
                neededTime,
                expected,
        }) => {
                expect(minCost(colors, neededTime)).toStrictEqual(expected);
        });
});
