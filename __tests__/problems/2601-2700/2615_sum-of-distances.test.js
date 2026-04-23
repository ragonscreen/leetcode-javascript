import { describe, expect, test } from 'bun:test';
import { distance } from '../../../src/problems/2601-2700/2615_sum-of-distances.js';

const testcases = [
        { nums: [1, 3, 1, 1, 2], expected: [5, 0, 3, 4, 0] },
        { nums: [0, 5, 3], expected: [0, 0, 0] },
];

describe('distance', () => {
        test.each(structuredClone(testcases))('distance($nums) -> $expected', ({
                nums,
                expected,
        }) => {
                expect(Array.from(distance(nums))).toStrictEqual(expected);
        });
});
