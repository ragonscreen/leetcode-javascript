import { describe, expect, test } from 'bun:test';

import { finalElement } from './3828_final-element-after-subarray-deletions.js';

const testcases = [
        { nums: [1, 5, 2], expected: 2 },
        { nums: [3, 7], expected: 7 },
];

describe('finalElement', () => {
        test.each(structuredClone(testcases))(
                'finalElement($nums) -> $expected',
                ({ nums, expected }) => {
                        expect(finalElement(nums)).toStrictEqual(expected);
                },
        );
});
