import { describe, expect, test } from 'bun:test';

import { findMaximumScore } from './3282_reach-end-of-array-with-max-score.js';

const testcases = [
        { nums: [1, 3, 1, 5], expected: 7 },
        { nums: [4, 3, 1, 3, 2], expected: 16 },
];

describe('findMaximumScore', () => {
        test.each(structuredClone(testcases))(
                'findMaximumScore($nums) -> $expected',
                ({ nums, expected }) => {
                        expect(findMaximumScore(nums)).toStrictEqual(expected);
                },
        );
});
