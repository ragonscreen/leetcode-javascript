import { describe, expect, test } from 'bun:test';
import {
        majorityElement,
        majorityElement1,
        majorityElement2,
} from '../../../src/problems/0101-0200/0169_majority-element.js';

const testcases = [
        { nums: [3, 2, 3], expected: 3 },
        { nums: [2, 2, 1, 1, 1, 2, 2], expected: 2 },
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

describe('majorityElement2', () => {
        test.each(
                structuredClone(testcases),
        )('majorityElement2($nums) -> $expected', ({ nums, expected }) => {
                expect(majorityElement2(nums)).toStrictEqual(expected);
        });
});
