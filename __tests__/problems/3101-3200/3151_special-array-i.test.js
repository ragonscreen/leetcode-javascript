import { describe, expect, test } from 'bun:test';
import { isArraySpecial } from '../../../src/problems/3101-3200/3151_special-array-i.js';

const testcases = [
        { nums: [1], expected: true },
        { nums: [2, 1, 4], expected: true },
        { nums: [4, 3, 1, 6], expected: false },
];

describe('isArraySpecial', () => {
        test.each(
                structuredClone(testcases),
        )('isArraySpecial($nums) -> $expected', ({ nums, expected }) => {
                expect(isArraySpecial(nums)).toStrictEqual(expected);
        });
});
