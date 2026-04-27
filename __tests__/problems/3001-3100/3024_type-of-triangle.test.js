import { describe, expect, test } from 'bun:test';
import { triangleType } from '../../../src/problems/3001-3100/3024_type-of-triangle.js';

const testcases = [
        { nums: [3, 3, 3], expected: 'equilateral' },
        { nums: [3, 4, 5], expected: 'scalene' },
        { nums: [12, 12, 20], expected: 'isosceles' },
        { nums: [1, 2, 3], expected: 'none' },
];

describe('triangleType', () => {
        test.each(
                structuredClone(testcases),
        )('triangleType($nums) -> $expected', ({ nums, expected }) => {
                expect(triangleType(nums)).toStrictEqual(expected);
        });
});
