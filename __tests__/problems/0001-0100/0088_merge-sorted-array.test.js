import { describe, expect, test } from 'bun:test';
import { merge } from '../../../src/problems/0001-0100/0088_merge-sorted-array.js';

const testcases = [
        {
                nums1: [1, 2, 3, 0, 0, 0],
                m: 3,
                nums2: [2, 5, 6],
                n: 3,
                expected: [1, 2, 2, 3, 5, 6],
        },
        { nums1: [1], m: 1, nums2: [], n: 0, expected: [1] },
        { nums1: [0], m: 0, nums2: [1], n: 1, expected: [1] },
        {
                nums1: [1, 2, 3, 0, 0, 0],
                m: 3,
                nums2: [4, 5, 6],
                n: 3,
                expected: [1, 2, 3, 4, 5, 6],
        },
        { nums1: [1, 0], m: 1, nums2: [0], n: 1, expected: [0, 1] },
];

describe('merge', () => {
        test.each(
                structuredClone(testcases),
        )('merge($nums1, $m, $nums2, $n) -> $expected', ({
                nums1,
                m,
                nums2,
                n,
                expected,
        }) => {
                const _nums1 = structuredClone(nums1);
                expect(merge(_nums1, m, nums2, n)).toBeNil();
                expect(_nums1).toStrictEqual(expected);
        });
});
