import { describe, expect, test } from 'bun:test';
import { replaceNonCoprimes } from '../../../src/problems/2101-2200/2197_replace-non-coprime-numbers-in-array.js';

const testcases = [
        { nums: [6, 4, 3, 2, 7, 6, 2], expected: [12, 7, 6] },
        { nums: [2, 2, 1, 1, 3, 3, 3], expected: [2, 1, 1, 3] },
        { nums: [10, 21, 11, 33, 14, 5], expected: [2310] },
];

describe('replaceNonCoprimes', () => {
        test.each(
                structuredClone(testcases),
        )('replaceNonCoprimes($nums) -> $expected', ({ nums, expected }) => {
                expect(replaceNonCoprimes(nums)).toStrictEqual(expected);
        });
});
