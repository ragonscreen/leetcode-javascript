import { describe, expect, test } from 'bun:test';
import { resultsArray } from '../../../src/problems/3201-3300/3255_find-the-power-of-k-size-subarrays-ii.js';

const testcases = [
        { nums: [1, 2, 3, 4, 3, 2, 5], k: 3, expected: [3, 4, -1, -1, -1] },
        { nums: [2, 2, 2, 2, 2], k: 4, expected: [-1, -1] },
        { nums: [3, 2, 3, 2, 3, 2], k: 2, expected: [-1, 3, -1, 3, -1] },
];

describe('resultsArray', () => {
        test.each(
                structuredClone(testcases),
        )('resultsArray($nums, $k) -> $expected', ({ nums, k, expected }) => {
                expect(Array.from(resultsArray(nums, k))).toStrictEqual(
                        expected,
                );
        });
});
