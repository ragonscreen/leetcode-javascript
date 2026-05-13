import { describe, expect, test } from 'bun:test';
import { minMoves } from '../../../src/problems/1601-1700/1674_minimum-moves-to-make-array-complementary.js';

const testcases = [
        { nums: [1, 2, 4, 3], limit: 4, expected: 1 },
        { nums: [1, 2, 2, 1], limit: 2, expected: 2 },
        { nums: [1, 2, 1, 2], limit: 2, expected: 0 },
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
