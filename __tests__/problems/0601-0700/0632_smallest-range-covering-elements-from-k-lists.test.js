import { describe, expect, test } from 'bun:test';
import { smallestRange } from '../../../src/problems/0601-0700/0632_smallest-range-covering-elements-from-k-lists.js';

const testcases = [
        {
                nums: [
                        [4, 10, 15, 24, 26],
                        [0, 9, 12, 20],
                        [5, 18, 22, 30],
                ],
                expected: [20, 24],
        },
        {
                nums: [
                        [1, 2, 3],
                        [1, 2, 3],
                        [1, 2, 3],
                ],
                expected: [1, 1],
        },
        {
                nums: [[-15, -10], [0, 20], [30]],
                expected: [-10, 30],
        },
        {
                nums: [
                        [10, 10],
                        [11, 11],
                ],
                expected: [10, 11],
        },
];

describe('smallestRange', () => {
        test.each(
                structuredClone(testcases),
        )('smallestRange($nums) -> $expected', ({ nums, expected }) => {
                expect(smallestRange(nums)).toStrictEqual(expected);
        });
});
