import { describe, expect, test } from 'bun:test';
import { findMaxConsecutiveOnes } from '../../../src/problems/0401-0500/0487_max-consecutive-ones-ii.js';

const testcases = [
        { nums: [1, 0, 1, 1, 0], expected: 4 },
        { nums: [1, 0, 1, 1, 0, 1], expected: 4 },
];

describe('findMaxConsecutiveOnes', () => {
        test.each(
                structuredClone(testcases),
        )('findMaxConsecutiveOnes($nums) -> $expected', ({
                nums,
                expected,
        }) => {
                expect(findMaxConsecutiveOnes(nums)).toStrictEqual(expected);
        });
});
