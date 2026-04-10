import { describe, expect, test } from 'bun:test';
import { findMin } from '../../../src/problems/0101-0200/0154_find-minimum-in-rotated-sorted-array-ii.js';

const testcases = [
        { nums: [1, 3, 5], expected: 1 },
        { nums: [2, 2, 2, 0, 1], expected: 0 },
        { nums: [1, 1, 1, 0, 1], expected: 0 },
];

describe('findMin', () => {
        test.each(structuredClone(testcases))('findMin($nums) -> $expected', ({
                nums,
                expected,
        }) => {
                expect(findMin(nums)).toStrictEqual(expected);
        });
});
