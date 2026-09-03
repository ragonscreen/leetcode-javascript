import { describe, expect, test } from 'bun:test';

import { halveArray } from '../../../src/problems/2201-2300/2208_minimum-operations-to-halve-array-sum.js';

const testcases = [
        { nums: [5, 19, 8, 1], expected: 3 },
        { nums: [3, 8, 20], expected: 3 },
];

describe('halveArray', () => {
        test.each(structuredClone(testcases))(
                'halveArray($nums) -> $expected',
                ({ nums, expected }) => {
                        expect(halveArray(nums)).toStrictEqual(expected);
                },
        );
});
