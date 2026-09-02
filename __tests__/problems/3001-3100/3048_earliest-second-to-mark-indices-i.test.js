import { describe, expect, test } from 'bun:test';
import { earliestSecondToMarkIndices } from '../../../src/problems/3001-3100/3048_earliest-second-to-mark-indices-i.js';

const testcases = [
        {
                nums: [2, 2, 0],
                changeIndices: [2, 2, 2, 2, 3, 2, 2, 1],
                expected: 8,
        },
        { nums: [1, 3], changeIndices: [1, 1, 1, 2, 1, 1, 1], expected: 6 },
        { nums: [0, 1], changeIndices: [2, 2, 2], expected: -1 },
];

describe('earliestSecondToMarkIndices', () => {
        test.each(
                structuredClone(testcases),
        )('earliestSecondToMarkIndices($nums, $changeIndices) -> $expected', ({
                nums,
                changeIndices,
                expected,
        }) => {
                expect(
                        earliestSecondToMarkIndices(nums, changeIndices),
                ).toStrictEqual(expected);
        });
});
