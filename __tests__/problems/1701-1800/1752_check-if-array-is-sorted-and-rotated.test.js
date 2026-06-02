import { describe, expect, test } from 'bun:test';
import { check } from '../../../src/problems/1701-1800/1752_check-if-array-is-sorted-and-rotated.js';

const testcases = [
        { nums: [3, 4, 5, 1, 2], expected: true },
        { nums: [2, 1, 3, 4], expected: false },
        { nums: [1, 2, 3], expected: true },
];

describe('check', () => {
        test.each(structuredClone(testcases))('check($nums) -> $expected', ({
                nums,
                expected,
        }) => {
                expect(check(nums)).toStrictEqual(expected);
        });
});
