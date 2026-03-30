import { describe, expect, test } from 'bun:test';
import { maximumCount } from '../../../src/problems/2501-2600/2529_maximum-count-of-positive-integer-and-negative-integer.js';

const testcases = [
        { nums: [-2, -1, -1, 1, 2, 3], expected: 3 },
        { nums: [-3, -2, -1, 0, 0, 1, 2], expected: 3 },
        { nums: [5, 20, 66, 1314], expected: 4 },
        {
                nums: [-3, -2, -2, -1, 0, 0, 0, 0, 0, 0, 1, 1, 2, 3, 4],
                expected: 5,
        },
        {
                nums: [-3, -2, -2, -1, 1, 1, 2, 3, 4],
                expected: 5,
        },
        {
                nums: [-3, -2, -2, -1],
                expected: 4,
        },
        {
                nums: [1, 2, 2, 3],
                expected: 4,
        },
        {
                nums: [0, 0, 0, 0],
                expected: 0,
        },
        {
                nums: [0, 0, 0, 1],
                expected: 1,
        },
        {
                nums: [-1, -1, 0, 0, 0, 0],
                expected: 2,
        },
];

describe('maximumCount', () => {
        test.each(
                structuredClone(testcases),
        )('maximumCount($nums) -> $expected', ({ nums, expected }) => {
                expect(maximumCount(nums)).toStrictEqual(expected);
        });
});
