import { describe, expect, test } from 'bun:test';
import {
        findPeakElement,
        findPeakElement1,
} from '../../../src/problems/0101-0200/0162_find-peak-element.js';

const testcases = [
        { nums: [1, 2, 3, 1], expected: [2] },
        { nums: [1, 2, 1, 3, 5, 6, 4], expected: [1, 5] },
];

describe('findPeakElement', () => {
        test.each(
                structuredClone(testcases),
        )('findPeakElement($nums) -> $expected', ({ nums, expected }) => {
                expect(findPeakElement(nums)).toBeOneOf(expected);
        });
});

describe('findPeakElement1', () => {
        test.each(
                structuredClone(testcases),
        )('findPeakElement1($nums) -> $expected', ({ nums, expected }) => {
                expect(findPeakElement1(nums)).toBeOneOf(expected);
        });
});
