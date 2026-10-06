import { describe, expect, test } from 'bun:test';

import { singleNumber } from './0136_single-number.js';

const testcases = [
        { nums: [2, 2, 1], expected: 1 },
        { nums: [4, 1, 2, 1, 2], expected: 4 },
        { nums: [1], expected: 1 },
];

describe('singleNumber', () => {
        test.each(structuredClone(testcases))(
                'singleNumber($nums) -> $expected',
                ({ nums, expected }) => {
                        expect(singleNumber(nums)).toStrictEqual(expected);
                },
        );
});
