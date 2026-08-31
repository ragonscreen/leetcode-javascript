import { describe, expect, test } from 'bun:test';
import { largestInteger } from '../../../src/problems/3401-3500/3471_find-the-largest-almost-missing-integer.js';

const testcases = [
        { nums: [3, 9, 2, 1, 7], k: 3, expected: 7 },
        { nums: [3, 9, 7, 2, 1, 7], k: 4, expected: 3 },
        { nums: [0, 0], k: 1, expected: -1 },
];

describe('largestInteger', () => {
        test.each(
                structuredClone(testcases),
        )('largestInteger($nums, $k) -> $expected', ({ nums, k, expected }) => {
                expect(largestInteger(nums, k)).toStrictEqual(expected);
        });
});
