import { describe, expect, test } from 'bun:test';
import { moveZeroes } from '../../../src/problems/0201-0300/0283_move-zeroes.js';

const testcases = [
        { nums: [0, 1, 0, 3, 12], expected: [1, 3, 12, 0, 0] },
        { nums: [0], expected: [0] },
];

describe('moveZeroes', () => {
        test.each(
                structuredClone(testcases),
        )('moveZeroes($nums) -> $expected', ({ nums, expected }) => {
                expect(moveZeroes(nums)).toBeNil();
                expect(nums).toStrictEqual(expected);
        });
});
