import { describe, expect, test } from 'bun:test';

import {
        maxScore,
        maxScore1,
} from '../../../src/problems/2501-2600/2587_rearrange-array-to-maximize-prefix-score.js';

const testcases = [
        { nums: [2, -1, 0, 1, -3, 3, -3], expected: 6 },
        { nums: [-2, -3, 0], expected: 0 },
];

describe('maxScore', () => {
        test.each(structuredClone(testcases))(
                'maxScore($nums) -> $expected',
                ({ nums, expected }) => {
                        expect(maxScore(nums)).toStrictEqual(expected);
                },
        );
});

describe('maxScore1', () => {
        test.each(structuredClone(testcases))(
                'maxScore1($nums) -> $expected',
                ({ nums, expected }) => {
                        expect(maxScore1(nums)).toStrictEqual(expected);
                },
        );
});
