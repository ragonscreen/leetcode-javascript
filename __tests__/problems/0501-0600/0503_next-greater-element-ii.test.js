import { describe, expect, test } from 'bun:test';

import { nextGreaterElements } from '../../../src/problems/0501-0600/0503_next-greater-element-ii.js';

const testcases = [
        { nums: [1, 2, 1], expected: [2, -1, 2] },
        { nums: [1, 2, 3, 4, 3], expected: [2, 3, 4, -1, 4] },
];

describe('nextGreaterElements', () => {
        test.each(structuredClone(testcases))(
                'nextGreaterElements($nums) -> $expected',
                ({ nums, expected }) => {
                        expect([...nextGreaterElements(nums)]).toStrictEqual(expected);
                },
        );
});
