import { describe, expect, test } from 'bun:test';

import { removeCoveredIntervals } from '../../../src/problems/1201-1300/1288_remove-covered-intervals.js';

const testcases = [
        {
                intervals: [
                        [52_141, 92_589],
                        [52_991, 93_486],
                        [46_321, 59_199],
                        [51_955, 78_788],
                        [18_533, 23_127],
                ],
                expected: 5,
        },
        {
                intervals: [
                        [14_041, 32_641],
                        [24_914, 51_477],
                        [4983, 81_235],
                        [62_018, 77_987],
                        [31_523, 32_192],
                        [74_196, 96_194],
                        [16_126, 52_652],
                        [59_901, 67_707],
                        [36_502, 51_366],
                        [56_437, 86_744],
                ],
                expected: 3,
        },
        {
                intervals: [
                        [1, 4],
                        [3, 6],
                        [2, 8],
                ],
                expected: 2,
        },
        {
                intervals: [
                        [1, 4],
                        [2, 3],
                ],
                expected: 1,
        },
];

describe('removeCoveredIntervals', () => {
        test.each(structuredClone(testcases))(
                'removeCoveredIntervals($intervals) -> $expected',
                ({ intervals, expected }) => {
                        expect(removeCoveredIntervals(intervals)).toStrictEqual(expected);
                },
        );
});
