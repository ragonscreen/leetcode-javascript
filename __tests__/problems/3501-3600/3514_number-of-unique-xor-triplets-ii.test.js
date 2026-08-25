import { describe, expect, test } from 'bun:test';
import { uniqueXorTriplets } from '../../../src/problems/3501-3600/3514_number-of-unique-xor-triplets-ii.js';

const testcases = [
        { nums: [1, 3], expected: 2 },
        { nums: [6, 7, 8, 9], expected: 4 },
];

describe('uniqueXorTriplets', () => {
        test.each(
                structuredClone(testcases),
        )('uniqueXorTriplets($nums) -> $expected', ({ nums, expected }) => {
                expect(uniqueXorTriplets(nums)).toStrictEqual(expected);
        });
});
