import { describe, expect, test } from 'bun:test';
import { searchInsert } from '../../../src/problems/0001-0100/0035_search-insert-position.js';

const testcases = [
        { nums: [1, 3, 5, 6], target: 5, expected: 2 },
        { nums: [1, 3, 5, 6], target: 2, expected: 1 },
        { nums: [1, 3, 5, 6], target: 7, expected: 4 },
        { nums: [1, 3, 5, 6], target: 0, expected: 0 },
];

describe('searchInsert', () => {
        test.each(
                structuredClone(testcases),
        )('searchInsert($nums, $target) -> $expected', ({
                nums,
                target,
                expected,
        }) => {
                expect(searchInsert(nums, target)).toStrictEqual(expected);
        });
});
