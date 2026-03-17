import { describe, expect, test } from 'bun:test';
import { smallestBalancedIndex } from '../../../src/problems/3801-3900/3862_find-the-smallest-balanced-index.js';

const testcases = [
        { nums: [2, 1, 2], expected: 1 },
        { nums: [2, 8, 2, 2, 5], expected: 2 },
        { nums: [1], expected: -1 },
        {
                nums: [
                        999, 818, 984, 995, 841, 822, 984, 978, 960, 997, 896,
                        926, 759, 961, 1000, 562, 1, 1, 1, 87, 4, 1, 40,
                ],
                expected: 15,
        },
        { nums: [1, 1, 2, 500_000_004], expected: -1 },
];

describe('smallestBalancedIndex', () => {
        test.each(
                structuredClone(testcases),
        )('smallestBalancedIndex($nums) -> $expected', ({ nums, expected }) => {
                expect(smallestBalancedIndex(nums)).toStrictEqual(expected);
        });
});
