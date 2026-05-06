import { describe, expect, test } from 'bun:test';
import { minTimeToReach } from '../../../src/problems/3301-3400/3341_find-minimum-time-to-reach-last-room-i.js';

const testcases = [
        {
                moveTime: [
                        [0, 4],
                        [4, 4],
                ],
                expected: 6,
        },
        {
                moveTime: [
                        [0, 0, 0],
                        [0, 0, 0],
                ],
                expected: 3,
        },
        {
                moveTime: [
                        [0, 1],
                        [1, 2],
                ],
                expected: 3,
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
