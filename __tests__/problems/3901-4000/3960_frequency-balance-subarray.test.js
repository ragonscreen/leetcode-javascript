import { describe, expect, test } from 'bun:test';
import { getLength } from '../../../src/problems/3901-4000/3960_frequency-balance-subarray.js';

const testcases = [
        { nums: [1, 2, 2, 1, 2, 3, 3, 3], expected: 5 },
        { nums: [5, 5, 5, 5], expected: 4 },
        { nums: [1, 2, 3, 4], expected: 1 },
];

describe('getLength', () => {
        test.each(
                structuredClone(testcases),
        )('getLength($nums) -> $expected', ({ nums, expected }) => {
                expect(getLength(nums)).toStrictEqual(expected);
        });
});
