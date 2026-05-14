import { describe, expect, test } from 'bun:test';
import { separateDigits } from '../../../src/problems/2501-2600/2553_separate-the-digits-in-an-array.js';

const testcases = [
        { nums: [13, 25, 83, 77], expected: [1, 3, 2, 5, 8, 3, 7, 7] },
        { nums: [7, 1, 3, 9], expected: [7, 1, 3, 9] },
];

describe('separateDigits', () => {
        test.each(
                structuredClone(testcases),
        )('separateDigits($nums) -> $expected', ({ nums, expected }) => {
                expect(separateDigits(nums)).toStrictEqual(expected);
        });
});
