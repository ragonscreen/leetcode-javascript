import { describe, expect, test } from 'bun:test';
import { arrayChange } from '../../../src/problems/2201-2300/2295_replace-elements-in-an-array.js';

const testcases = [
        {
                nums: [1, 2, 4, 6],
                operations: [
                        [1, 3],
                        [4, 7],
                        [6, 1],
                ],
                expected: [3, 2, 7, 1],
        },
        {
                nums: [1, 2],
                operations: [
                        [1, 3],
                        [2, 1],
                        [3, 2],
                ],
                expected: [2, 1],
        },
];

describe('arrayChange', () => {
        test.each(
                structuredClone(testcases),
        )('arrayChange($nums, $operations) -> $expected', ({
                nums,
                operations,
                expected,
        }) => {
                expect(arrayChange(nums, operations)).toStrictEqual(expected);
        });
});
