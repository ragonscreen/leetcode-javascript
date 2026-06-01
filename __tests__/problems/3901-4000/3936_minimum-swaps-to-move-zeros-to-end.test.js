import { describe, expect, test } from 'bun:test';
import { minimumSwaps } from '../../../src/problems/3901-4000/3936_minimum-swaps-to-move-zeros-to-end.js';

const testcases = [
        { nums: [0, 1, 0, 3, 12], expected: 2 },
        { nums: [0, 1, 0, 2], expected: 1 },
        { nums: [1, 2, 0], expected: 0 },
];

describe('minimumSwaps', () => {
        test.each(
                structuredClone(testcases),
        )('minimumSwaps($nums) -> $expected', ({ nums, expected }) => {
                expect(minimumSwaps(nums)).toStrictEqual(expected);
        });
});
