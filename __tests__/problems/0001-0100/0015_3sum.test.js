import { describe, expect, test } from 'bun:test';
import { threeSum } from '../../../src/problems/0001-0100/0015_3sum.js';
import { normaliseNestedArrayNums } from '../../utils/utils.js';

const testcases = [
        {
                nums: [-1, 0, 1, 2, -1, -4],
                expected: [
                        [-1, -1, 2],
                        [-1, 0, 1],
                ],
        },
        { nums: [0, 1, 1], expected: [] },
        { nums: [0, 0, 0], expected: [[0, 0, 0]] },
        { nums: [0, 0, 0, 0], expected: [[0, 0, 0]] },
        {
                nums: [-2, 0, 1, 1, 2],
                expected: [
                        [-2, 0, 2],
                        [-2, 1, 1],
                ],
        },
        {
                nums: [
                        2, -3, 0, -2, -5, -5, -4, 1, 2, -2, 2, 0, 2, -4, 5, 5,
                        -10,
                ],
                expected: [
                        [-10, 5, 5],
                        [-5, 0, 5],
                        [-4, 2, 2],
                        [-3, -2, 5],
                        [-3, 1, 2],
                        [-2, 0, 2],
                ],
        },
];

describe('threeSum', () => {
        test.each(structuredClone(testcases))('threeSum($nums) -> $expected', ({
                nums,
                expected,
        }) => {
                expect(threeSum(nums)).toStrictEqual(
                        normaliseNestedArrayNums(expected),
                );
        });
});
