import { describe, expect, test } from 'bun:test';

import { sumOfSquares } from './2778_sum-of-squares-of-special-elements.js';

const testcases = [
        { nums: [1, 2, 3, 4], expected: 21 },
        { nums: [2, 7, 1, 19, 18, 3], expected: 63 },
];

describe('sumOfSquares', () => {
        test.each(structuredClone(testcases))(
                'sumOfSquares($nums) -> $expected',
                ({ nums, expected }) => {
                        expect(sumOfSquares(nums)).toStrictEqual(expected);
                },
        );
});
