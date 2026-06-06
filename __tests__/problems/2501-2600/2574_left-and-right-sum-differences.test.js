import { describe, expect, test } from 'bun:test';
import { leftRightDifference } from '../../../src/problems/2501-2600/2574_left-and-right-sum-differences.js';

const testcases = [
        { nums: [10, 4, 8, 3], expected: [15, 1, 11, 22] },
        { nums: [1], expected: [0] },
];

describe('leftRightDifference', () => {
        test.each(
                structuredClone(testcases),
        )('leftRightDifference($nums) -> $expected', ({ nums, expected }) => {
                expect(Array.from(leftRightDifference(nums))).toStrictEqual(
                        expected,
                );
        });
});
