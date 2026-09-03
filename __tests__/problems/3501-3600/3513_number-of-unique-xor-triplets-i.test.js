import { describe, expect, test } from 'bun:test';

import { uniqueXorTriplets } from '../../../src/problems/3501-3600/3513_number-of-unique-xor-triplets-i.js';

const testcases = [
        { nums: [1], expected: 1 },
        { nums: [1, 2], expected: 2 },
        { nums: [1, 2, 3], expected: 4 },
        { nums: [1, 2, 3, 4], expected: 8 },
        { nums: [1, 2, 3, 4, 5], expected: 8 },
        { nums: [1, 2, 3, 4, 5, 6], expected: 8 },
        { nums: [1, 2, 3, 4, 5, 6, 7], expected: 8 },
        { nums: [1, 2, 3, 4, 5, 6, 7, 8], expected: 16 },
];

describe('uniqueXorTriplets', () => {
        test.each(structuredClone(testcases))(
                'uniqueXorTriplets($nums) -> $expected',
                ({ nums, expected }) => {
                        expect(uniqueXorTriplets(nums)).toStrictEqual(expected);
                },
        );
});
