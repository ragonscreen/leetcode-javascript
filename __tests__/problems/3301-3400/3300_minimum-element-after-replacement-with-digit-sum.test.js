import { describe, expect, test } from 'bun:test';
import { minElement } from '../../../src/problems/3301-3400/3300_minimum-element-after-replacement-with-digit-sum.js';

const testcases = [
        { nums: [10, 12, 13, 14], expected: 1 },
        { nums: [1, 2, 3, 4], expected: 1 },
        { nums: [999, 19, 199], expected: 10 },
];

describe('minElement', () => {
        test.each(
                structuredClone(testcases),
        )('minElement($nums) -> $expected', ({ nums, expected }) => {
                expect(minElement(nums)).toStrictEqual(expected);
        });
});
