import { describe, expect, test } from 'bun:test';

import { minimumDeletions } from '../../../src/problems/2001-2100/2091_removing-minimum-and-maximum-from-array.js';

const testcases = [
        { nums: [2, 10, 7, 5, 4, 1, 8, 6], expected: 5 },
        { nums: [0, -4, 19, 1, 8, -2, -3, 5], expected: 3 },
        { nums: [101], expected: 1 },
];

describe('minimumDeletions', () => {
        test.each(structuredClone(testcases))(
                'minimumDeletions($nums) -> $expected',
                ({ nums, expected }) => {
                        expect(minimumDeletions(nums)).toStrictEqual(expected);
                },
        );
});
