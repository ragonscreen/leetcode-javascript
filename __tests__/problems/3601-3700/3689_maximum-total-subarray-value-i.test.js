import { describe, expect, test } from 'bun:test';
import {
        maxTotalValue,
        maxTotalValue1,
} from '../../../src/problems/3601-3700/3689_maximum-total-subarray-value-i.js';

const testcases = [
        { nums: [1, 3, 2], k: 2, expected: 4 },
        { nums: [4, 2, 5, 1], k: 3, expected: 12 },
];

describe('maxTotalValue', () => {
        test.each(
                structuredClone(testcases),
        )('maxTotalValue($nums, $k) -> $expected', ({ nums, k, expected }) => {
                expect(maxTotalValue(nums, k)).toStrictEqual(expected);
        });
});

describe('maxTotalValue1', () => {
        test.each(
                structuredClone(testcases),
        )('maxTotalValue1($nums, $k) -> $expected', ({ nums, k, expected }) => {
                expect(maxTotalValue1(nums, k)).toStrictEqual(expected);
        });
});
