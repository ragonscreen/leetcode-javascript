import { describe, expect, test } from 'bun:test';
import { largestNumber } from '../../../src/problems/0101-0200/0179_largest-number.js';

const testcases = [
        { nums: [10, 2], expected: '210' },
        { nums: [3, 30, 34, 5, 9], expected: '9534330' },
        { nums: [0, 0], expected: '0' },
        { nums: [3, 4, 1, 2], expected: '4321' },
        { nums: [888, 88], expected: '88888' },
        { nums: [0, 0, 0, 0], expected: '0' },
];

describe('largestNumber', () => {
        test.each(
                structuredClone(testcases),
        )('largestNumber($nums) -> $expected', ({ nums, expected }) => {
                expect(largestNumber(nums)).toStrictEqual(expected);
        });
});
