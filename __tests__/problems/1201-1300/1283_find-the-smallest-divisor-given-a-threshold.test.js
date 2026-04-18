import { describe, expect, test } from 'bun:test';
import { smallestDivisor } from '../../../src/problems/1201-1300/1283_find-the-smallest-divisor-given-a-threshold.js';

const testcases = [
        { nums: [1, 2, 5, 9], threshold: 6, expected: 5 },
        { nums: [44, 22, 33, 11, 1], threshold: 5, expected: 44 },
        { nums: [1, 2, 5, 9], threshold: 17, expected: 1 },
        { nums: [1, 2, 5, 9], threshold: 18, expected: 1 },
];

describe('smallestDivisor', () => {
        test.each(
                structuredClone(testcases),
        )('smallestDivisor($nums, $threshold) -> $expected', ({
                nums,
                threshold,
                expected,
        }) => {
                expect(smallestDivisor(nums, threshold)).toStrictEqual(
                        expected,
                );
        });
});
