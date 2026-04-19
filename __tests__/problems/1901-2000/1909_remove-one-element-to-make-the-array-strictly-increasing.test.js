import { describe, expect, test } from 'bun:test';
import { canBeIncreasing } from '../../../src/problems/1901-2000/1909_remove-one-element-to-make-the-array-strictly-increasing.js';

const testcases = [
        { nums: [1, 2, 10, 5, 7], expected: true },
        { nums: [2, 3, 1, 2], expected: false },
        { nums: [1, 1, 1], expected: false },
        { nums: [2, 1, 2], expected: true },
        { nums: [1, 2, 1], expected: true },
        { nums: [1, 2, 1, 3], expected: true },
        { nums: [1, 2, 1, 3, 4], expected: true },
        { nums: [1, 3, 2, 4], expected: true },
];

describe('canBeIncreasing', () => {
        test.each(
                structuredClone(testcases),
        )('canBeIncreasing($nums) -> $expected', ({ nums, expected }) => {
                expect(canBeIncreasing(nums)).toStrictEqual(expected);
        });
});
