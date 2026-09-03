import { describe, expect, test } from 'bun:test';

import { maximumLength } from '../../../src/problems/3001-3100/3020_find-the-maximum-number-of-elements-in-subset.js';

const testcases = [
        { nums: [5, 4, 1, 2, 2], expected: 3 },
        { nums: [1, 3, 2, 4], expected: 1 },
];

describe('maximumLength', () => {
        test.each(structuredClone(testcases))(
                'maximumLength($nums) -> $expected',
                ({ nums, expected }) => {
                        expect(maximumLength(nums)).toStrictEqual(expected);
                },
        );
});
