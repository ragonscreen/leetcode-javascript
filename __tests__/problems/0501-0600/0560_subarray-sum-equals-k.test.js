import { describe, expect, test } from 'bun:test';
import { subarraySum } from '../../../src/problems/0501-0600/0560_subarray-sum-equals-k.js';

const testcases = [
        { nums: [1, 1, 1], k: 2, expected: 2 },
        { nums: [1, 2, 3], k: 3, expected: 2 },
        { nums: [1, -1, 0], k: 0, expected: 3 },
        { nums: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], k: 0, expected: 55 },
];

describe('subarraySum', () => {
        test.each(
                structuredClone(testcases),
        )('subarraySum($nums, $k) -> $expected', ({ nums, k, expected }) => {
                expect(subarraySum(nums, k)).toStrictEqual(expected);
        });
});
