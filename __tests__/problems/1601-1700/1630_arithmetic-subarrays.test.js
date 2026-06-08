import { describe, expect, test } from 'bun:test';
import { checkArithmeticSubarrays } from '../../../src/problems/1601-1700/1630_arithmetic-subarrays.js';

const testcases = [
        {
                nums: [4, 6, 5, 9, 3, 7],
                l: [0, 0, 2],
                r: [2, 3, 5],
                expected: [true, false, true],
        },
        {
                nums: [-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10],
                l: [0, 1, 6, 4, 8, 7],
                r: [4, 4, 9, 7, 9, 10],
                expected: [false, true, false, false, true, true],
        },
];

describe('checkArithmeticSubarrays', () => {
        test.each(
                structuredClone(testcases),
        )('checkArithmeticSubarrays($nums, $l, $r) -> $expected', ({
                nums,
                l,
                r,
                expected,
        }) => {
                expect(checkArithmeticSubarrays(nums, l, r)).toStrictEqual(
                        expected,
                );
        });
});
