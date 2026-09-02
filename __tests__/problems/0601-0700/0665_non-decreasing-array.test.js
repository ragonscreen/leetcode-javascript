import { describe, expect, test } from 'bun:test';
import { checkPossibility } from '../../../src/problems/0601-0700/0665_non-decreasing-array.js';

const testcases = [
        { nums: [4, 2, 3], expected: true },
        { nums: [4, 2, 1], expected: false },
        { nums: [3, 4, 2, 3], expected: false },
        { nums: [2, 3, 3, 2, 2], expected: false },
        { nums: [-1, 4, 2, 3], expected: true },
];

describe('checkPossibility', () => {
        test.each(
                structuredClone(testcases),
        )('checkPossibility($nums) -> $expected', ({ nums, expected }) => {
                expect(checkPossibility(nums)).toStrictEqual(expected);
        });
});
