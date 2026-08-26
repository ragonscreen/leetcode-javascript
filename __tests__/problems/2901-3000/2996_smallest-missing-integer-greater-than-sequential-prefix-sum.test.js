import { describe, expect, test } from 'bun:test';
import { missingInteger } from '../../../src/problems/2901-3000/2996_smallest-missing-integer-greater-than-sequential-prefix-sum.js';

const testcases = [
        { nums: [1, 2, 3, 2, 5], expected: 6 },
        { nums: [3, 4, 5, 1, 12, 14, 13], expected: 15 },
];

describe('missingInteger', () => {
        test.each(
                structuredClone(testcases),
        )('missingInteger($nums) -> $expected', ({ nums, expected }) => {
                expect(missingInteger(nums)).toStrictEqual(expected);
        });
});
