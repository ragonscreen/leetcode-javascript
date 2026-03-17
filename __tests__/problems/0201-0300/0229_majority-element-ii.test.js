import { describe, expect, test } from 'bun:test';
import {
        majorityElement,
        majorityElement1,
} from '../../../src/problems/0201-0300/0229_majority-element-ii.js';

const testcases = [
        { nums: [3, 2, 3], expected: [3] },
        { nums: [1], expected: [1] },
        { nums: [1, 2], expected: [1, 2] },
];

describe('majorityElement', () => {
        test.each(
                structuredClone(testcases),
        )('majorityElement($nums) -> $expected', ({ nums, expected }) => {
                expect(majorityElement(nums)).toStrictEqual(expected);
        });
});

describe('majorityElement1', () => {
        test.each(
                structuredClone(testcases),
        )('majorityElement1($nums) -> $expected', ({ nums, expected }) => {
                expect(majorityElement1(nums)).toStrictEqual(expected);
        });
});
