import { describe, expect, test } from 'bun:test';

import {
        maxSumTwoNoOverlap,
        maxSumTwoNoOverlap1,
} from '../../../src/problems/1001-1100/1031_maximum-sum-of-two-non-overlapping-subarrays.js';

const testcases = [
        {
                nums: [0, 6, 5, 2, 2, 5, 1, 9, 4],
                firstLen: 1,
                secondLen: 2,
                expected: 20,
        },
        // {
        //         nums: [3, 8, 1, 3, 2, 1, 8, 9, 0],
        //         firstLen: 3,
        //         secondLen: 2,
        //         expected: 29,
        // },
        // {
        //         nums: [2, 1, 5, 6, 0, 9, 5, 0, 3, 8],
        //         firstLen: 4,
        //         secondLen: 3,
        //         expected: 31,
        // },
];

describe('maxSumTwoNoOverlap', () => {
        test.each(structuredClone(testcases))(
                'maxSumTwoNoOverlap($nums, $firstLen, $secondLen) -> $expected',
                ({ nums, firstLen, secondLen, expected }) => {
                        expect(maxSumTwoNoOverlap(nums, firstLen, secondLen)).toStrictEqual(
                                expected,
                        );
                },
        );
});

describe('maxSumTwoNoOverlap1', () => {
        test.each(structuredClone(testcases))(
                'maxSumTwoNoOverlap1($nums, $firstLen, $secondLen) -> $expected',
                ({ nums, firstLen, secondLen, expected }) => {
                        expect(maxSumTwoNoOverlap1(nums, firstLen, secondLen)).toStrictEqual(
                                expected,
                        );
                },
        );
});
