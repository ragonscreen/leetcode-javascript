import { describe, expect, test } from 'bun:test';
import { minimumDeviation } from '../../../src/problems/1601-1700/1675_minimize-deviation-in-array.js';

const testcases = [
        { nums: [1, 2, 3, 4], expected: 1 },
        { nums: [4, 1, 5, 20, 3], expected: 3 },
        { nums: [2, 10, 8], expected: 3 },
        { nums: [3, 5], expected: 1 },
        { nums: [10, 4, 3], expected: 2 },
];

describe('minimumDeviation', () => {
        test.each(
                structuredClone(testcases),
        )('minimumDeviation($nums) -> $expected', ({ nums, expected }) => {
                expect(minimumDeviation(nums)).toStrictEqual(expected);
        });
});
