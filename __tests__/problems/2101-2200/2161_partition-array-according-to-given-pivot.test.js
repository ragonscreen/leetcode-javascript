import { describe, expect, test } from 'bun:test';
import { pivotArray } from '../../../src/problems/2101-2200/2161_partition-array-according-to-given-pivot.js';

const testcases = [
        {
                nums: [9, 12, 5, 10, 14, 3, 10],
                pivot: 10,
                expected: [9, 5, 3, 10, 10, 12, 14],
        },
        { nums: [-3, 4, 3, 2], pivot: 2, expected: [-3, 2, 4, 3] },
];

describe('pivotArray', () => {
        test.each(
                structuredClone(testcases),
        )('pivotArray($nums, $pivot) -> $expected', ({
                nums,
                pivot,
                expected,
        }) => {
                expect(Array.from(pivotArray(nums, pivot))).toStrictEqual(
                        expected,
                );
        });
});
