import { describe, expect, test } from 'bun:test';

import { findMissingElements } from '../../../src/problems/3701-3800/3731_find-missing-elements.js';

const testcases = [
        { nums: [1, 4, 2, 5], expected: [3] },
        { nums: [7, 8, 6, 9], expected: [] },
        { nums: [5, 1], expected: [2, 3, 4] },
];

describe('findMissingElements', () => {
        test.each(structuredClone(testcases))(
                'findMissingElements($nums) -> $expected',
                ({ nums, expected }) => {
                        expect(Array.from(findMissingElements(nums))).toStrictEqual(expected);
                },
        );
});
