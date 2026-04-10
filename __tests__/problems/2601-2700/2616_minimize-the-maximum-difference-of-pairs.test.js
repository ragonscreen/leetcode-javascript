import { describe, expect, test } from 'bun:test';
import { minimizeMax } from '../../../src/problems/2601-2700/2616_minimize-the-maximum-difference-of-pairs.js';

const testcases = [
        { nums: [10, 1, 2, 7, 1, 3], p: 2, expected: 1 },
        { nums: [4, 2, 1, 2], p: 1, expected: 0 },
        { nums: [3, 6, 8, 7, 5, 4, 9, 5], p: 0, expected: 0 },
];

describe('minimizeMax', () => {
        test.each(
                structuredClone(testcases),
        )('minimizeMax($nums, $p) -> $expected', ({ nums, p, expected }) => {
                expect(minimizeMax(nums, p)).toStrictEqual(expected);
        });
});
