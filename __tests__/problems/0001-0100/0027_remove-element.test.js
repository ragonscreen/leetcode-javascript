import { describe, expect, test } from 'bun:test';
import { removeElement } from '../../../src/problems/0001-0100/0027_remove-element.js';

const testcases = [
        { nums: [3, 2, 2, 3], val: 3, expected: { len: 2, nums: [2, 2] } },
        {
                nums: [0, 1, 2, 2, 3, 0, 4, 2],
                val: 2,
                expected: { len: 5, nums: [0, 1, 3, 0, 4] },
        },
];

describe('removeElement', () => {
        test.each(
                structuredClone(testcases),
        )('removeElement($nums, $val) -> $expected', ({
                nums,
                val,
                expected,
        }) => {
                const k = removeElement(nums, val);
                expect(k).toStrictEqual(expected.len);

                for (let i = 0; i < k; i++) {
                        expect(nums[i]).toStrictEqual(expected.nums[i]);
                }
        });
});
