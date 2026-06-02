import { describe, expect, test } from 'bun:test';
import {
        minOperations,
        minOperations1,
} from '../../../src/problems/3901-4000/3937_minimum-operations-to-make-array-modulo-alternating-i.js';

const testcases = [
        { nums: [1, 4, 2, 8], k: 3, expected: 2 },
        { nums: [1, 1, 1], k: 3, expected: 1 },
        { nums: [99_982], k: 13, expected: 0 },
        { nums: [59, 91], k: 76, expected: 0 },
];

describe('minOperations', () => {
        test.each(
                structuredClone(testcases),
        )('minOperations($nums, $k) -> $expected', ({ nums, k, expected }) => {
                expect(minOperations(nums, k)).toStrictEqual(expected);
        });
});

describe('minOperations1', () => {
        test.each(
                structuredClone(testcases),
        )('minOperations1($nums, $k) -> $expected', ({ nums, k, expected }) => {
                expect(minOperations1(nums, k)).toStrictEqual(expected);
        });
});
