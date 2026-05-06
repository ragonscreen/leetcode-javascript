import { describe, expect, test } from 'bun:test';
import { firstStableIndex } from '../../../src/problems/3901-4000/3904_smallest-stable-index-ii.js';

const testcases = [
        { nums: [5, 0, 1, 4], k: 3, expected: 3 },
        { nums: [3, 2, 1], k: 1, expected: -1 },
        { nums: [0], k: 0, expected: 0 },
];

describe('firstStableIndex', () => {
        test.each(
                structuredClone(testcases),
        )('firstStableIndex($nums, $k) -> $expected', ({
                nums,
                k,
                expected,
        }) => {
                expect(firstStableIndex(nums, k)).toStrictEqual(expected);
        });
});
