import { describe, expect, test } from 'bun:test';
import {
        isGood,
        isGood1,
        isGood2,
} from '../../../src/problems/2701-2800/2784_check-if-array-is-good.js';

const testcases = [
        { nums: [2, 1, 3], expected: false },
        { nums: [1, 3, 3, 2], expected: true },
        { nums: [1, 1], expected: true },
        { nums: [3, 4, 4, 1, 2, 1], expected: false },
        { nums: [4], expected: false },
        { nums: [1, 1, 1], expected: false },
        { nums: [1], expected: false },
        { nums: [4, 1, 2, 3, 4], expected: true },
];

describe('isGood', () => {
        test.each(structuredClone(testcases))('isGood($nums) -> $expected', ({
                nums,
                expected,
        }) => {
                expect(isGood(nums)).toStrictEqual(expected);
        });
});

describe('isGood1', () => {
        test.each(structuredClone(testcases))('isGood1($nums) -> $expected', ({
                nums,
                expected,
        }) => {
                expect(isGood1(nums)).toStrictEqual(expected);
        });
});

describe('isGood2', () => {
        test.each(structuredClone(testcases))('isGood2($nums) -> $expected', ({
                nums,
                expected,
        }) => {
                expect(isGood2(nums)).toStrictEqual(expected);
        });
});
