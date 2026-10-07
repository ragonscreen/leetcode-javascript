import { describe, expect, test } from 'bun:test';

import { maxValue } from './4058_maximum-pulse-value-after-one-subarray-rotation.js';

const testcases = [
        { nums: [1, 5, 2], expected: 6 },
        { nums: [6, 4, 3], expected: 7 },
        { nums: [9, 7], expected: 2 },
];

describe.skip('maxValue', () => {
        test.each(structuredClone(testcases))(
                'maxValue($nums) -> $expected',
                ({ nums, expected }) => {
                        expect(maxValue(nums)).toStrictEqual(expected);
                },
        );
});
