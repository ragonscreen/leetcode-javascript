import { describe, expect, test } from 'bun:test';
import { findMaxAverage } from '../../../src/problems/0601-0700/0643_maximum-average-subarray-i.js';

const testcases = [
        { nums: [1, 12, -5, -6, 50, 3], k: 4, expected: 12.75 },
        { nums: [5], k: 1, expected: 5 },
];

describe('findMaxAverage', () => {
        test.each(
                structuredClone(testcases),
        )('findMaxAverage($nums, $k) -> $expected', ({ nums, k, expected }) => {
                expect(findMaxAverage(nums, k)).toStrictEqual(expected);
        });
});
