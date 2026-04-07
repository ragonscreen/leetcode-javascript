import { describe, expect, test } from 'bun:test';
import { findMedianSortedArrays } from '../../../src/problems/0001-0100/0004_median-of-two-sorted-arrays.js';

const testcases = [
        { nums1: [1, 3], nums2: [2], expected: 2 },
        { nums1: [1, 2], nums2: [3, 4], expected: 2.5 },
        { nums1: [1], nums2: [], expected: 1 },
        { nums1: [], nums2: [2, 3], expected: 2.5 },
];

describe('findMedianSortedArrays', () => {
        test.each(
                structuredClone(testcases),
        )('findMedianSortedArrays($nums1, $nums2) -> $expected', ({
                nums1,
                nums2,
                expected,
        }) => {
                expect(findMedianSortedArrays(nums1, nums2)).toBeCloseTo(
                        expected,
                );
        });
});
