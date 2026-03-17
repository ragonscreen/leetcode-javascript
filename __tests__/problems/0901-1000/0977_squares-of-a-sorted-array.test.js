import { describe, expect, test } from 'bun:test';
import { sortedSquares } from '../../../src/problems/0901-1000/0977_squares-of-a-sorted-array.js';

const testcases = [
        { nums: [-4, -1, 0, 3, 10], expected: [0, 1, 9, 16, 100] },
        { nums: [-7, -3, 2, 3, 11], expected: [4, 9, 9, 49, 121] },
        { nums: [-7, -3, 3, 11], expected: [9, 9, 49, 121] },
];

describe('sortedSquares', () => {
        test.each(
                structuredClone(testcases),
        )('sortedSquares($nums) -> $expected', ({ nums, expected }) => {
                expect(sortedSquares(nums)).toStrictEqual(expected);
        });
});
