import { describe, expect, test } from 'bun:test';
import { largestRectangleArea } from '../../../src/problems/0001-0100/0084_largest-rectangle-in-histogram.js';

const testcases = [
        { heights: [2, 1, 5, 6, 2, 3], expected: 10 },
        { heights: [2, 4], expected: 4 },
];

describe('largestRectangleArea', () => {
        test.each(
                structuredClone(testcases),
        )('largestRectangleArea($heights) -> $expected', ({
                heights,
                expected,
        }) => {
                expect(largestRectangleArea(heights)).toStrictEqual(expected);
        });
});
