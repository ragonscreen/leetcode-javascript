import { describe, expect, test } from 'bun:test';
import { isTrionic } from '../../../src/problems/3601-3700/3637_trionic-array-i.js';

const testcases = [
        { nums: [1, 3, 5, 4, 2, 6], expected: true },
        { nums: [2, 1, 3], expected: false },
        { nums: [1, 2, 3], expected: false },
        { nums: [1, 2, 3, 2, 3], expected: true },
        { nums: [1, 2, 3, 2, 3, 2], expected: false },
];

describe('isTrionic', () => {
        test.each(
                structuredClone(testcases),
        )('isTrionic($nums) -> $expected', ({ nums, expected }) => {
                expect(isTrionic(nums)).toStrictEqual(expected);
        });
});
