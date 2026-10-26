import { describe, expect, test } from 'bun:test';

import { minSwaps } from './3551_minimum-swaps-to-sort-by-digit-sum.js';

const testcases = [
        { nums: [37, 100], expected: 1 },
        { nums: [22, 14, 33, 7], expected: 0 },
        { nums: [18, 43, 34, 16], expected: 2 },
        { nums: [193_644_115, 569_655_076, 91_600_837], expected: 2 },
        { nums: [346_675_656, 436_516_098, 372_126_778, 781_771_807], expected: 3 },
        {
                nums: [
                        834_417_347, 409_793_394, 733_228_019, 111_420_659, 540_164_947,
                        824_740_442, 639_659_967,
                ],
                expected: 4,
        },
];

describe('minSwaps', () => {
        test.each(structuredClone(testcases))(
                'minSwaps($nums) -> $expected',
                ({ nums, expected }) => {
                        expect(minSwaps(nums)).toStrictEqual(expected);
                },
        );
});
