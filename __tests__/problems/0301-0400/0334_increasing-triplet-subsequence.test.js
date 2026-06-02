import { describe, expect, test } from 'bun:test';
import {
        increasingTriplet,
        increasingTriplet1,
        increasingTriplet2,
} from '../../../src/problems/0301-0400/0334_increasing-triplet-subsequence.js';

const testcases = [
        { nums: [1, 2, 3, 4, 5], expected: true },
        { nums: [5, 4, 3, 2, 1], expected: false },
        { nums: [2, 1, 5, 0, 4, 6], expected: true },
        { nums: [4, 5, 2_147_483_647, 1, 2], expected: true },
];

describe('increasingTriplet', () => {
        test.each(
                structuredClone(testcases),
        )('increasingTriplet($nums) -> $expected', ({ nums, expected }) => {
                expect(increasingTriplet(nums)).toStrictEqual(expected);
        });
});

describe('increasingTriplet1', () => {
        test.each(
                structuredClone(testcases),
        )('increasingTriplet1($nums) -> $expected', ({ nums, expected }) => {
                expect(increasingTriplet1(nums)).toStrictEqual(expected);
        });
});

describe('increasingTriplet2', () => {
        test.each(
                structuredClone(testcases),
        )('increasingTriplet2($nums) -> $expected', ({ nums, expected }) => {
                expect(increasingTriplet2(nums)).toStrictEqual(expected);
        });
});
