import { describe, expect, test } from 'bun:test';

import { nextGreaterElement } from '../../../src/problems/0401-0500/0496_next-greater-element-i.js';

const testcases = [
        { nums1: [4, 1, 2], nums2: [1, 3, 4, 2], expected: [-1, 3, -1] },
        { nums1: [2, 4], nums2: [1, 2, 3, 4], expected: [3, -1] },
];

describe('nextGreaterElement', () => {
        test.each(structuredClone(testcases))(
                'nextGreaterElement($nums1, $nums2) -> $expected',
                ({ nums1, nums2, expected }) => {
                        expect([...nextGreaterElement(nums1, nums2)]).toStrictEqual(expected);
                },
        );
});
