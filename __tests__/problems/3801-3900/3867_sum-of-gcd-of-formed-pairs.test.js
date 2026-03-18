import { describe, expect, test } from 'bun:test';
import { gcdSum } from '../../../src/problems/3801-3900/3867_sum-of-gcd-of-formed-pairs.js';

const testcases = [
        { nums: [2, 6, 4], expected: 2 },
        { nums: [3, 6, 2, 8], expected: 5 },
        { nums: [8, 5], expected: 1 },
];

describe('gcdSum', () => {
        test.each(structuredClone(testcases))('gcdSum($nums) -> $expected', ({
                nums,
                expected,
        }) => {
                expect(gcdSum(nums)).toStrictEqual(expected);
        });
});
