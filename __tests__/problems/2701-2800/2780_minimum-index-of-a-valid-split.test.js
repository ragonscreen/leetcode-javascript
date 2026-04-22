import { describe, expect, test } from 'bun:test';
import {
        minimumIndex,
        minimumIndex1,
} from '../../../src/problems/2701-2800/2780_minimum-index-of-a-valid-split.js';

const testcases = [
        { nums: [1, 2, 2, 2], expected: 2 },
        { nums: [2, 1, 3, 1, 1, 1, 7, 1, 2, 1], expected: 4 },
        { nums: [3, 3, 3, 3, 7, 2, 2], expected: -1 },
];

describe('minimumIndex', () => {
        test.each(
                structuredClone(testcases),
        )('minimumIndex($nums) -> $expected', ({ nums, expected }) => {
                expect(minimumIndex(nums)).toStrictEqual(expected);
        });
});

describe('minimumIndex1', () => {
        test.each(
                structuredClone(testcases),
        )('minimumIndex1($nums) -> $expected', ({ nums, expected }) => {
                expect(minimumIndex1(nums)).toStrictEqual(expected);
        });
});
