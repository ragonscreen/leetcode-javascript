import { describe, expect, test } from 'bun:test';
import { minSwaps } from '../../../src/problems/2101-2200/2134_minimum-swaps-to-group-all-1s-together-ii.js';

const testcases = [
        { nums: [0, 1, 0, 1, 1, 0, 0], expected: 1 },
        { nums: [0, 1, 1, 1, 0, 0, 1, 1, 0], expected: 2 },
        { nums: [1, 1, 0, 0, 1], expected: 0 },
        { nums: [0, 0, 0], expected: 0 },
        { nums: [1], expected: 0 },
        { nums: [0, 1, 0], expected: 0 },
        { nums: [0, 0, 1], expected: 0 },
        { nums: [1, 0, 0], expected: 0 },
        { nums: [1, 1, 1, 0, 0, 1, 0, 1, 1, 0], expected: 1 },
];

describe('minSwaps', () => {
        test.each(structuredClone(testcases))('minSwaps($nums) -> $expected', ({
                nums,
                expected,
        }) => {
                expect(minSwaps(nums)).toStrictEqual(expected);
        });
});
