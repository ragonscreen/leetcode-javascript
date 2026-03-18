import { describe, expect, test } from 'bun:test';
import { getAverages } from '../../../src/problems/2001-2100/2090_k-radius-subarray-averages.js';

const testcases = [
        {
                nums: [7, 4, 3, 9, 1, 8, 5, 2, 6],
                k: 3,
                expected: [-1, -1, -1, 5, 4, 4, -1, -1, -1],
        },
        { nums: [100_000], k: 0, expected: [100_000] },
        { nums: [8], k: 100_000, expected: [-1] },
];

describe('getAverages', () => {
        test.each(
                structuredClone(testcases),
        )('getAverages($nums, $k) -> $expected', ({ nums, k, expected }) => {
                expect(getAverages(nums, k)).toStrictEqual(expected);
        });
});
