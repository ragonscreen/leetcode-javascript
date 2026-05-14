import { describe, expect, test } from 'bun:test';
import { concatWithReverse } from '../../../src/problems/3901-4000/3925_concatenate-array-with-reverse.js';

const testcases = [
        { nums: [1, 2, 3], expected: [1, 2, 3, 3, 2, 1] },
        { nums: [1], expected: [1, 1] },
];

describe('concatWithReverse', () => {
        test.each(
                structuredClone(testcases),
        )('concatWithReverse($nums) -> $expected', ({ nums, expected }) => {
                expect(Array.from(concatWithReverse(nums))).toStrictEqual(
                        expected,
                );
        });
});
