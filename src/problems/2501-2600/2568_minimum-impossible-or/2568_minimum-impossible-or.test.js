import { describe, expect, test } from 'bun:test';

import { minImpossibleOR } from './2568_minimum-impossible-or.js';

const testcases = [
        { nums: [2, 1], expected: 4 },
        { nums: [5, 3, 2], expected: 1 },
        { nums: [4, 32, 16, 8, 8, 75, 1, 2], expected: 64 },
];

describe('minImpossibleOR', () => {
        test.each(structuredClone(testcases))(
                'minImpossibleOR($nums) -> $expected',
                ({ nums, expected }) => {
                        expect(minImpossibleOR(nums)).toStrictEqual(expected);
                },
        );
});
