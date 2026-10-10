import { describe, expect, test } from 'bun:test';

import { minSumSquareDiff } from './2333_minimum-sum-of-squared-difference.js';

const testcases = [
        { nums1: [1, 2, 3, 4], nums2: [2, 10, 20, 19], k1: 0, k2: 0, expected: 579 },
        { nums1: [1, 4, 10, 12], nums2: [5, 8, 6, 9], k1: 1, k2: 1, expected: 43 },
        { nums1: [1, 4, 10, 12], nums2: [5, 8, 6, 9], k1: 1, k2: 2, expected: 36 },
        { nums1: [1, 2], nums2: [5, 14], k1: 1, k2: 2, expected: 97 },
        { nums1: [1, 2, 3, 4], nums2: [2, 3, 4, 5], k1: 6, k2: 7, expected: 0 },
        {
                nums1: [19, 18, 19, 18, 18, 19, 19],
                nums2: [1, 0, 1, 0, 0, 1, 1],
                k1: 10,
                k2: 33,
                expected: 985,
        },
        {
                nums1: [19, 18, 19, 18, 18, 19, 19],
                nums2: [1, 0, 1, 0, 0, 1, 1],
                k1: 10,
                k2: 35,
                expected: 939,
        },
];

describe('minSumSquareDiff', () => {
        test.each(structuredClone(testcases))(
                'minSumSquareDiff($nums1, $nums2, $k1, $k2) -> $expected',
                ({ nums1, nums2, k1, k2, expected }) => {
                        expect(minSumSquareDiff(nums1, nums2, k1, k2)).toStrictEqual(expected);
                },
        );
});
