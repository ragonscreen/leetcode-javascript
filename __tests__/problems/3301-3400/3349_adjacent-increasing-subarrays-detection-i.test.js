import { describe, expect, test } from 'bun:test';

import { hasIncreasingSubarrays } from '../../../src/problems/3301-3400/3349_adjacent-increasing-subarrays-detection-i.js';

const testcases = [
        { nums: [2, 5, 7, 8, 9, 2, 3, 4, 3, 1], k: 3, expected: true },
        { nums: [1, 2, 3, 4, 4, 4, 4, 5, 6, 7], k: 5, expected: false },
];

describe('hasIncreasingSubarrays', () => {
        test.each(structuredClone(testcases))(
                'hasIncreasingSubarrays($nums, $k) -> $expected',
                ({ nums, k, expected }) => {
                        expect(hasIncreasingSubarrays(nums, k)).toStrictEqual(expected);
                },
        );
});
