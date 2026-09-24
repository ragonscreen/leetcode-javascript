import { describe, expect, test } from 'bun:test';

import { smallestIndex } from '../../../src/problems/3501-3600/3550_smallest-index-with-digit-sum-equal-to-index.js';

const testcases = [
        { nums: [1, 3, 2], expected: 2 },
        { nums: [1, 10, 11], expected: 1 },
        { nums: [1, 2, 3], expected: -1 },
];

describe('smallestIndex', () => {
        test.each(structuredClone(testcases))(
                'smallestIndex($nums) -> $expected',
                ({ nums, expected }) => {
                        expect(smallestIndex(nums)).toStrictEqual(expected);
                },
        );
});
