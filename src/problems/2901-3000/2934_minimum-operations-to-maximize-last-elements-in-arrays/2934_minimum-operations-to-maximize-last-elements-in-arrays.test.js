import { describe, expect, test } from 'bun:test';

import { minOperations } from './2934_minimum-operations-to-maximize-last-elements-in-arrays.js';

const testcases = [
        { nums1: [1, 2, 7], nums2: [4, 5, 3], expected: 1 },
        { nums1: [2, 3, 4, 5, 9], nums2: [8, 8, 4, 4, 4], expected: 2 },
        { nums1: [1, 5, 4], nums2: [2, 5, 3], expected: -1 },
];

describe('minOperations', () => {
        test.each(structuredClone(testcases))(
                'minOperations($nums1, $nums2) -> $expected',
                ({ nums1, nums2, expected }) => {
                        expect(minOperations(nums1, nums2)).toStrictEqual(expected);
                },
        );
});
