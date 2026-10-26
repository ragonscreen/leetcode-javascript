import { describe, expect, test } from 'bun:test';

import { beautifulSubarrays } from './2588_count-the-number-of-beautiful-subarrays.js';

const testcases = [
        { nums: [4, 3, 1, 2, 4], expected: 2 },
        { nums: [1, 10, 4], expected: 0 },
];

describe('beautifulSubarrays', () => {
        test.each(structuredClone(testcases))(
                'beautifulSubarrays($nums) -> $expected',
                ({ nums, expected }) => {
                        expect(beautifulSubarrays(nums)).toStrictEqual(expected);
                },
        );
});
