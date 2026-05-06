import { describe, expect, test } from 'bun:test';
import { minTimeToReach } from '../../../src/problems/3301-3400/3342_find-minimum-time-to-reach-last-room-ii.js';

const testcases = [
        {
                moveTime: [
                        [0, 4],
                        [4, 4],
                ],
                expected: 7,
        },
        {
                moveTime: [
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                ],
                expected: 6,
        },
        {
                moveTime: [
                        [0, 1],
                        [1, 2],
                ],
                expected: 4,
        },
        {
                moveTime: [
                        [0, 58],
                        [27, 69],
                ],
                expected: 71,
        },
];

describe('minTimeToReach', () => {
        test.each(
                structuredClone(testcases),
        )('minTimeToReach($moveTime) -> $expected', ({
                moveTime,
                expected,
        }) => {
                expect(minTimeToReach(moveTime)).toStrictEqual(expected);
        });
});
