import { describe, expect, test } from 'bun:test';
import { sortJumbled } from '../../../src/problems/2101-2200/2191_sort-the-jumbled-numbers.js';

const testcases = [
        {
                mapping: [8, 9, 4, 0, 2, 1, 3, 5, 7, 6],
                nums: [991, 338, 38],
                expected: [338, 38, 991],
        },
        {
                mapping: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                nums: [789, 456, 123],
                expected: [123, 456, 789],
        },
        {
                mapping: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
                nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                expected: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
        },
];

describe('sortJumbled', () => {
        test.each(
                structuredClone(testcases),
        )('sortJumbled($mapping, $nums) -> $expected', ({
                mapping,
                nums,
                expected,
        }) => {
                expect(sortJumbled(mapping, nums)).toStrictEqual(expected);
        });
});
