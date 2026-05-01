import { describe, expect, test } from 'bun:test';
import {
        maxRotateFunction,
        maxRotateFunction1,
} from '../../../src/problems/0301-0400/0396_rotate-function.js';

const testcases = [
        { nums: [4, 3, 2, 6], expected: 26 },
        { nums: [100], expected: 0 },
];

describe('maxRotateFunction', () => {
        test.each(
                structuredClone(testcases),
        )('maxRotateFunction($nums) -> $expected', ({ nums, expected }) => {
                expect(maxRotateFunction(nums)).toStrictEqual(expected);
        });
});

describe('maxRotateFunction1', () => {
        test.each(
                structuredClone(testcases),
        )('maxRotateFunction1($nums) -> $expected', ({ nums, expected }) => {
                expect(maxRotateFunction1(nums)).toStrictEqual(expected);
        });
});
