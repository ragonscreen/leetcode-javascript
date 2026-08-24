import { describe, expect, test } from 'bun:test';
import { findGCD } from '../../../src/problems/1901-2000/1979_find-greatest-common-divisor-of-array.js';

const testcases = [
        { nums: [2, 5, 6, 9, 10], expected: 2 },
        { nums: [7, 5, 6, 8, 3], expected: 1 },
        { nums: [3, 3], expected: 3 },
];

describe('findGCD', () => {
        test.each(structuredClone(testcases))('findGCD($nums) -> $expected', ({
                nums,
                expected,
        }) => {
                expect(findGCD(nums)).toStrictEqual(expected);
        });
});
