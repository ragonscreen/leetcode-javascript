import { describe, expect, test } from 'bun:test';
import { minimumDifference } from '../../../src/problems/1901-2000/1984_minimum-difference-between-highest-and-lowest-of-k-scores.js';

const testcases = [
        { nums: [90], k: 1, expected: 0 },
        { nums: [9, 4, 1, 7], k: 2, expected: 2 },
];

describe('minimumDifference', () => {
        test.each(
                structuredClone(testcases),
        )('minimumDifference($nums, $k) -> $expected', ({
                nums,
                k,
                expected,
        }) => {
                expect(minimumDifference(nums, k)).toStrictEqual(expected);
        });
});
