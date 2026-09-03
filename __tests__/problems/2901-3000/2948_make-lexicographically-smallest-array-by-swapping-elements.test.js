import { describe, expect, test } from 'bun:test';

import { lexicographicallySmallestArray } from '../../../src/problems/2901-3000/2948_make-lexicographically-smallest-array-by-swapping-elements.js';

const testcases = [
        { nums: [1, 5, 3, 9, 8], limit: 2, expected: [1, 3, 5, 8, 9] },
        { nums: [1, 7, 6, 18, 2, 1], limit: 3, expected: [1, 6, 7, 18, 1, 2] },
        { nums: [1, 7, 28, 19, 10], limit: 3, expected: [1, 7, 28, 19, 10] },
        {
                nums: [32, 1, 7, 28, 19, 10],
                limit: 3,
                expected: [32, 1, 7, 28, 19, 10],
        },
];

describe('lexicographicallySmallestArray', () => {
        test.each(structuredClone(testcases))(
                'lexicographicallySmallestArray($nums, $limit) -> $expected',
                ({ nums, limit, expected }) => {
                        expect(
                                Array.from(lexicographicallySmallestArray(nums, limit)),
                        ).toStrictEqual(expected);
                },
        );
});
