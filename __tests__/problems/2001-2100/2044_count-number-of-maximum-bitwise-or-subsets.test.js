import { describe, expect, test } from 'bun:test';

import { countMaxOrSubsets } from '../../../src/problems/2001-2100/2044_count-number-of-maximum-bitwise-or-subsets.js';

const testcases = [
        { nums: [3, 1], expected: 2 },
        { nums: [2, 2, 2], expected: 7 },
        { nums: [3, 2, 1, 5], expected: 6 },
];

describe('countMaxOrSubsets', () => {
        test.each(structuredClone(testcases))(
                'countMaxOrSubsets($nums) -> $expected',
                ({ nums, expected }) => {
                        expect(countMaxOrSubsets(nums)).toStrictEqual(expected);
                },
        );
});
