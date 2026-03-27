import { describe, expect, test } from 'bun:test';
import {
        findDisappearedNumbers,
        findDisappearedNumbers1,
} from '../../../src/problems/0401-0500/0448_find-all-numbers-disappeared-in-an-array.js';

const testcases = [
        { nums: [4, 3, 2, 7, 8, 2, 3, 1], expected: [5, 6] },
        { nums: [1, 1], expected: [2] },
];

describe('findDisappearedNumbers', () => {
        test.each(
                structuredClone(testcases),
        )('findDisappearedNumbers($nums) -> $expected', ({
                nums,
                expected,
        }) => {
                expect(findDisappearedNumbers(nums)).toStrictEqual(expected);
        });
});

describe('findDisappearedNumbers1', () => {
        test.each(
                structuredClone(testcases),
        )('findDisappearedNumbers1($nums) -> $expected', ({
                nums,
                expected,
        }) => {
                expect(findDisappearedNumbers1(nums)).toStrictEqual(expected);
        });
});
