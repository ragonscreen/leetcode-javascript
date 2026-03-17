import { describe, expect, test } from 'bun:test';
import { removeDuplicates } from '../../../src/problems/0001-0100/0026_remove-duplicates-from-sorted-array.js';

const testcases = [
        { nums: [1, 1, 2], expected: 2, expectedNums: [1, 2] },
        {
                nums: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
                expected: 5,
                expectedNums: [0, 1, 2, 3, 4],
        },
        { nums: [0], expected: 1, expectedNums: [0] },
];

describe('removeDuplicates', () => {
        test.each(
                structuredClone(testcases),
        )('removeDuplicates($nums) -> $expected', ({
                nums,
                expected,
                expectedNums,
        }) => {
                const k = removeDuplicates(nums);
                expect(k).toStrictEqual(expected);
                expect(nums.slice(0, k)).toContainAllValues(expectedNums);
        });
});
