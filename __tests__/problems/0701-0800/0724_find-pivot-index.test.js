import { describe, expect, test } from 'bun:test';
import { pivotIndex } from '../../../src/problems/0701-0800/0724_find-pivot-index.js';

const testcases = [
        { nums: [1, 7, 3, 6, 5, 6], expected: 3 },
        { nums: [1, 2, 3], expected: -1 },
        { nums: [2, 1, -1], expected: 0 },
];

describe('pivotIndex', () => {
        test.each(
                structuredClone(testcases),
        )('pivotIndex($nums) -> $expected', ({ nums, expected }) => {
                expect(pivotIndex(nums)).toStrictEqual(expected);
        });
});
