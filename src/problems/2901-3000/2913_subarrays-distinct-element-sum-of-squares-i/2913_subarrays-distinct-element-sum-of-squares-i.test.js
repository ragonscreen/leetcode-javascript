import { describe, expect, test } from 'bun:test';

import { sumCounts } from './2913_subarrays-distinct-element-sum-of-squares-i.js';

const testcases = [
        { nums: [1, 2, 1], expected: 15 },
        { nums: [1, 1], expected: 3 },
];

describe('sumCounts', () => {
        test.each(structuredClone(testcases))(
                'sumCounts($nums) -> $expected',
                ({ nums, expected }) => {
                        expect(sumCounts(nums)).toStrictEqual(expected);
                },
        );
});
