import { describe, expect, test } from 'bun:test';
import {
        maxDistance,
        maxDistance1,
} from '../../../src/problems/1801-1900/1855_maximum-distance-between-a-pair-of-values.js';

const testcases = [
        { nums1: [55, 30, 5, 4, 2], nums2: [100, 20, 10, 10, 5], expected: 2 },
        { nums1: [2, 2, 2], nums2: [10, 10, 1], expected: 1 },
        { nums1: [30, 29, 19, 5], nums2: [25, 25, 25, 25, 25], expected: 2 },
];

describe('maxDistance', () => {
        test.each(
                structuredClone(testcases),
        )('maxDistance($nums1, $nums2) -> $expected', ({
                nums1,
                nums2,
                expected,
        }) => {
                expect(maxDistance(nums1, nums2)).toStrictEqual(expected);
        });
});

describe('maxDistance1', () => {
        test.each(
                structuredClone(testcases),
        )('maxDistance1($nums1, $nums2) -> $expected', ({
                nums1,
                nums2,
                expected,
        }) => {
                expect(maxDistance1(nums1, nums2)).toStrictEqual(expected);
        });
});
