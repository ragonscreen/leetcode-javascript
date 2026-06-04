import { describe, expect, test } from 'bun:test';
import { highestPeak } from '../../../src/problems/1701-1800/1765_map-of-highest-peak.js';

const testcases = [
        {
                isWater: [
                        [0, 1],
                        [0, 0],
                ],
                expected: [
                        [1, 0],
                        [2, 1],
                ],
        },
        {
                isWater: [
                        [0, 0, 1],
                        [1, 0, 0],
                        [0, 0, 0],
                ],
                expected: [
                        [1, 1, 0],
                        [0, 1, 1],
                        [1, 2, 2],
                ],
        },
];

describe('highestPeak', () => {
        test.each(
                structuredClone(testcases),
        )('highestPeak($isWater) -> $expected', ({ isWater, expected }) => {
                expect(highestPeak(isWater)).toStrictEqual(expected);
        });
});
