import { describe, expect, test } from 'bun:test';

import { maxAlternatingSum } from './3727_maximum-alternating-sum-of-squares.js';

const testcases = [
        { nums: [1, 2, 3], expected: 12 },
        { nums: [1, -1, 2, -2, 3, -3], expected: 16 },
];

describe('maxAlternatingSum', () => {
        test.each(structuredClone(testcases))(
                'maxAlternatingSum($nums) -> $expected',
                ({ nums, expected }) => {
                        expect(maxAlternatingSum(nums)).toStrictEqual(expected);
                },
        );
});
