import { describe, expect, test } from 'bun:test';
import {
        findMatrix,
        findMatrix1,
} from '../../../src/problems/2601-2700/2610_convert-an-array-into-a-2d-array-with-conditions.js';

const testcases = [
        { nums: [1, 3, 4, 1, 2, 3, 1], expected: [[1, 3, 4, 2], [1, 3], [1]] },
        { nums: [1, 2, 3, 4], expected: [[4, 3, 2, 1]] },
        { nums: [2, 1, 1], expected: [[1, 2], [1]] },
];

describe('findMatrix', () => {
        test.each(
                structuredClone(testcases),
        )('findMatrix($nums) -> $expected', ({ nums, expected }) => {
                const actual = findMatrix(nums);

                for (let i = 0; i < expected.length; i++) {
                        expect(actual[i]).toContainAllValues(expected[i]);
                }
        });
});

describe('findMatrix1', () => {
        test.each(
                structuredClone(testcases),
        )('findMatrix1($nums) -> $expected', ({ nums, expected }) => {
                const actual = findMatrix1(nums);

                for (let i = 0; i < expected.length; i++) {
                        expect(actual[i]).toContainAllValues(expected[i]);
                }
        });
});
