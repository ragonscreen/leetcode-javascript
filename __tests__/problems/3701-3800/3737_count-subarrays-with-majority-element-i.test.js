import { describe, expect, test } from 'bun:test';
import {
        countMajoritySubarrays,
        countMajoritySubarrays1,
} from '../../../src/problems/3701-3800/3737_count-subarrays-with-majority-element-i.js';

const testcases = [
        { nums: [1, 2, 2, 3], target: 2, expected: 5 },
        { nums: [1, 1, 1, 1], target: 1, expected: 10 },
        { nums: [1, 2, 3], target: 4, expected: 0 },
        { nums: [4, 1, 1, 4, 2, 1], target: 1, expected: 7 },
];

describe('countMajoritySubarrays', () => {
        test.each(
                structuredClone(testcases),
        )('countMajoritySubarrays($nums, $target) -> $expected', ({
                nums,
                target,
                expected,
        }) => {
                expect(countMajoritySubarrays(nums, target)).toStrictEqual(
                        expected,
                );
        });
});

describe('countMajoritySubarrays1', () => {
        test.each(
                structuredClone(testcases),
        )('countMajoritySubarrays1($nums, $target) -> $expected', ({
                nums,
                target,
                expected,
        }) => {
                expect(countMajoritySubarrays1(nums, target)).toStrictEqual(
                        expected,
                );
        });
});
