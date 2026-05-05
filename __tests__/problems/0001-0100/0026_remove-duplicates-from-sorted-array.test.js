import { describe, expect, test } from 'bun:test';
import { removeDuplicates } from '../../../src/problems/0001-0100/0026_remove-duplicates-from-sorted-array.js';

const testcases = [
        { nums: [1, 1, 2], expected: { len: 2, nums: [1, 2] } },
        {
                nums: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
                expected: { len: 5, nums: [0, 1, 2, 3, 4] },
        },
        { nums: [0], expected: { len: 1, nums: [0] } },
];

describe('removeDuplicates', () => {
        test.each(
                structuredClone(testcases),
        )('removeDuplicates($nums) -> $expected', ({ nums, expected }) => {
                const k = removeDuplicates(nums);
                expect(k).toStrictEqual(expected.len);
                expect(nums.slice(0, k)).toContainAllValues(expected.nums);
        });
});
