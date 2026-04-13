import { describe, expect, test } from 'bun:test';
import { getMinDistance } from '../../../src/problems/1801-1900/1848_minimum-distance-to-the-target-element.js';

const testcases = [
        { nums: [1, 2, 3, 4, 5], target: 5, start: 3, expected: 1 },
        { nums: [1], target: 1, start: 0, expected: 0 },
        {
                nums: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                target: 1,
                start: 0,
                expected: 0,
        },
];

describe('getMinDistance', () => {
        test.each(
                structuredClone(testcases),
        )('getMinDistance($nums, $target, $start) -> $expected', ({
                nums,
                target,
                start,
                expected,
        }) => {
                expect(getMinDistance(nums, target, start)).toStrictEqual(
                        expected,
                );
        });
});
