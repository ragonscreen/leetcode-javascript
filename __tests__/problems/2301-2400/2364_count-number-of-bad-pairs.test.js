import { describe, expect, test } from 'bun:test';
import { countBadPairs } from '../../../src/problems/2301-2400/2364_count-number-of-bad-pairs.js';

const testcases = [
        { nums: [4,1,3,3], expected: 5 },
        { nums: [1,2,3,4,5], expected: 0 },
];

describe('countBadPairs', () => {
        test.each(structuredClone(testcases))('countBadPairs($nums) -> $expected', ({ nums, expected }) => {
                expect(countBadPairs(nums)).toStrictEqual(expected);
        });
});