import { describe, expect, test } from 'bun:test';
import { uniformArray } from '../../../src/problems/3801-3900/3876_construct-uniform-parity-array-ii.js';

const testcases = [
        { nums1: [1, 4, 7], expected: true },
        { nums1: [2, 3], expected: false },
        { nums1: [4, 6], expected: true },
        { nums1: [2, 3, 4, 5], expected: false },
];

describe('uniformArray', () => {
        test.each(
                structuredClone(testcases),
        )('uniformArray($nums1) -> $expected', ({ nums1, expected }) => {
                expect(uniformArray(nums1)).toStrictEqual(expected);
        });
});
