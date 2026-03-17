import { describe, expect, test } from 'bun:test';
import { rearrangeArray } from '../../../src/problems/2101-2200/2149_rearrange-array-elements-by-sign.js';

const testcases = [
        { nums: [3, 1, -2, -5, 2, -4], expected: [3, -2, 1, -5, 2, -4] },
        { nums: [-1, 1], expected: [1, -1] },
];

describe('rearrangeArray', () => {
        test.each(
                structuredClone(testcases),
        )('rearrangeArray($nums) -> $expected', ({ nums, expected }) => {
                expect(rearrangeArray(nums)).toStrictEqual(expected);
        });
});
