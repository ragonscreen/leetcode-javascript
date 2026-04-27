import { describe, expect, test } from 'bun:test';
import { peakIndexInMountainArray } from '../../../src/problems/0801-0900/0852_peak-index-in-a-mountain-array.js';

const testcases = [
        { arr: [0, 1, 0], expected: 1 },
        { arr: [0, 2, 1, 0], expected: 1 },
        { arr: [0, 10, 5, 2], expected: 1 },
        { arr: [0, 3, 5, 12, 2], expected: 3 },
];

describe('peakIndexInMountainArray', () => {
        test.each(
                structuredClone(testcases),
        )('peakIndexInMountainArray($arr) -> $expected', ({
                arr,
                expected,
        }) => {
                expect(peakIndexInMountainArray(arr)).toStrictEqual(expected);
        });
});
