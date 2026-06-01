import { describe, expect, test } from 'bun:test';
import { maxNumOfMarkedIndices } from '../../../src/problems/2501-2600/2576_find-the-maximum-number-of-marked-indices.js';

const testcases = [
        { nums: [3, 5, 2, 4], expected: 2 },
        { nums: [9, 2, 5, 4], expected: 4 },
        { nums: [7, 6, 8], expected: 0 },
];

describe('maxNumOfMarkedIndices', () => {
        test.each(
                structuredClone(testcases),
        )('maxNumOfMarkedIndices($nums) -> $expected', ({ nums, expected }) => {
                expect(maxNumOfMarkedIndices(nums)).toStrictEqual(expected);
        });
});
