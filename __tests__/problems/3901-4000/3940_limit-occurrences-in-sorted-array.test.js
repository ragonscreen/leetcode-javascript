import { describe, expect, test } from 'bun:test';
import {
        limitOccurrences,
        limitOccurrences1,
} from '../../../src/problems/3901-4000/3940_limit-occurrences-in-sorted-array.js';

const testcases = [
        { nums: [1, 1, 1, 2, 2, 3], k: 2, expected: [1, 1, 2, 2, 3] },
        { nums: [1, 2, 3], k: 1, expected: [1, 2, 3] },
];

describe('limitOccurrences', () => {
        test.each(
                structuredClone(testcases),
        )('limitOccurrences($nums, $k) -> $expected', ({
                nums,
                k,
                expected,
        }) => {
                expect(limitOccurrences(nums, k)).toStrictEqual(expected);
        });
});

describe('limitOccurrences1', () => {
        test.each(
                structuredClone(testcases),
        )('limitOccurrences1($nums, $k) -> $expected', ({
                nums,
                k,
                expected,
        }) => {
                expect(limitOccurrences1(nums, k)).toStrictEqual(expected);
        });
});
