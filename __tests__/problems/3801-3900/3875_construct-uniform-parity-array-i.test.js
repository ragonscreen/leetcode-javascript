import { describe, expect, test } from 'bun:test';
import { uniformArray } from '../../../src/problems/3801-3900/3875_construct-uniform-parity-array-i.js';

const testcases = [
        { nums1: [2, 3], expected: true },
        { nums1: [4, 6], expected: true },
];

describe('uniformArray', () => {
        test.each(
                structuredClone(testcases),
        )('uniformArray($nums1) -> $expected', ({ nums1, expected }) => {
                expect(uniformArray(nums1)).toStrictEqual(expected);
        });
});
