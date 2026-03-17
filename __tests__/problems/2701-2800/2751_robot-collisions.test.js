import { describe, expect, test } from 'bun:test';
import { survivedRobotsHealths } from '../../../src/problems/2701-2800/2751_robot-collisions.js';

const testcases = [
        {
                positions: [5, 4, 3, 2, 1],
                healths: [2, 17, 9, 15, 10],
                directions: 'RRRRR',
                expected: [2, 17, 9, 15, 10],
        },
        {
                positions: [3, 5, 2, 6],
                healths: [10, 10, 15, 12],
                directions: 'RLRL',
                expected: [14],
        },
        {
                positions: [1, 2, 5, 6],
                healths: [10, 10, 11, 11],
                directions: 'RLRL',
                expected: [],
        },
        {
                positions: [1, 2, 3],
                healths: [2, 1, 1],
                directions: 'RLL',
                expected: [],
        },
        {
                positions: [1_000_000_000],
                healths: [1_000_000_000],
                directions: 'R',
                expected: [1_000_000_000],
        },
        {
                positions: [1, 40],
                healths: [10, 11],
                directions: 'RL',
                expected: [10],
        },
];

describe('survivedRobotsHealths', () => {
        test.each(
                structuredClone(testcases),
        )('survivedRobotsHealths($positions, $healths, $directions) -> $expected', ({
                positions,
                healths,
                directions,
                expected,
        }) => {
                expect(
                        survivedRobotsHealths(positions, healths, directions),
                ).toStrictEqual(expected);
        });
});
