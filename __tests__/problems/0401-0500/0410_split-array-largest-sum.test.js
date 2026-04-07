import { describe, expect, test } from 'bun:test';
import { splitArray } from '../../../src/problems/0401-0500/0410_split-array-largest-sum.js';

const testcases = [
        { nums: [7, 2, 5, 10, 8], k: 2, expected: 18 },
        { nums: [1, 2, 3, 4, 5], k: 2, expected: 9 },
];

describe('splitArray', () => {
        test.each(
                structuredClone(testcases),
        )('splitArray($nums, $k) -> $expected', ({ nums, k, expected }) => {
                expect(splitArray(nums, k)).toStrictEqual(expected);
        });
});
