import { describe, expect, test } from 'bun:test';
import { subarraysWithKDistinct } from '../../../src/problems/0901-1000/0992_subarrays-with-k-different-integers.js';

const testcases = [
        { nums: [1, 2, 1, 2, 3], k: 2, expected: 7 },
        { nums: [1, 2, 1, 3, 4], k: 3, expected: 3 },
        { nums: [5, 1, 4, 4, 5], k: 3, expected: 4 },
        { nums: [1, 2, 3, 2, 3, 1], k: 3, expected: 7 },
];

describe('subarraysWithKDistinct', () => {
        test.each(
                structuredClone(testcases),
        )('subarraysWithKDistinct($nums, $k) -> $expected', ({
                nums,
                k,
                expected,
        }) => {
                expect(subarraysWithKDistinct(nums, k)).toStrictEqual(expected);
        });
});
