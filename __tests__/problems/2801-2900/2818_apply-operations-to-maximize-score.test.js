import { describe, expect, test } from 'bun:test';

import { maximumScore } from '../../../src/problems/2801-2900/2818_apply-operations-to-maximize-score.js';

const testcases = [
        { nums: [8, 3, 9, 3, 8], k: 2, expected: 81 },
        { nums: [19, 12, 14, 6, 10, 18], k: 3, expected: 4788 },
        { nums: [7, 4, 9, 6, 2, 3], k: 4, expected: 3087 },
        { nums: [2, 1, 14, 5, 18, 1, 8, 5], k: 34, expected: 799_392_504 },
];

describe('maximumScore', () => {
        test.each(structuredClone(testcases))(
                'maximumScore($nums, $k) -> $expected',
                ({ nums, k, expected }) => {
                        expect(maximumScore(nums, k)).toStrictEqual(expected);
                },
        );
});
