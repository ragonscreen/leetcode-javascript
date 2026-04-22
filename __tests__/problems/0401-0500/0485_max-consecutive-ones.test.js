import { describe, expect, test } from 'bun:test';
import { findMaxConsecutiveOnes } from '../../../src/problems/0401-0500/0485_max-consecutive-ones.js';

const testcases = [
        { nums: [1, 1, 0, 1, 1, 1], expected: 3 },
        { nums: [1, 0, 1, 1, 0, 1], expected: 2 },
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
