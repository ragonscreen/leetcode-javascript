import { describe, expect, test } from 'bun:test';
import { countMajoritySubarrays } from '../../../src/problems/3701-3800/3739_count-subarrays-with-majority-element-ii.js';

const testcases = [
        { nums: [1, 2, 2, 3], target: 2, expected: 5 },
        { nums: [1, 1, 1, 1], target: 1, expected: 10 },
        { nums: [1, 2, 3], target: 4, expected: 0 },
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
