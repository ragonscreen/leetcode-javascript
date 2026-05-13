import { describe, expect, test } from 'bun:test';
import { minMoves } from '../../../src/problems/1601-1700/1674_minimum-moves-to-make-array-complementary.js';

const testcases = [
        { nums: [1, 2, 4, 3], limit: 4, expected: 1 },
        { nums: [1, 2, 2, 1], limit: 2, expected: 2 },
        { nums: [1, 2, 1, 2], limit: 2, expected: 0 },
        { nums: [1, 2], limit: 2, expected: 0 },
        {
                nums: [20_744, 7642, 19_090, 9992, 2457, 16_848, 3458, 15_721],
                limit: 22_891,
                expected: 4,
        },
];

describe('minMoves', () => {
        test.each(
                structuredClone(testcases),
        )('minMoves($nums, $limit) -> $expected', ({
                nums,
                limit,
                expected,
        }) => {
                expect(minMoves(nums, limit)).toStrictEqual(expected);
        });
});
