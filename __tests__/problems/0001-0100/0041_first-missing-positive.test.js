import { describe, expect, test } from 'bun:test';
import { firstMissingPositive } from '../../../src/problems/0001-0100/0041_first-missing-positive.js';

const testcases = [
        { nums: [1, 2, 0], expected: 3 },
        { nums: [3, 4, -1, 1], expected: 2 },
        { nums: [7, 8, 9, 11, 12], expected: 1 },
        { nums: [1], expected: 2 },
        { nums: [0, 1, 2], expected: 3 },
        { nums: [2, 1], expected: 3 },
        { nums: [-5], expected: 1 },
];

describe('firstMissingPositive', () => {
        test.each(
                structuredClone(testcases),
        )('firstMissingPositive($nums) -> $expected', ({ nums, expected }) => {
                expect(firstMissingPositive(nums)).toStrictEqual(expected);
        });
});
