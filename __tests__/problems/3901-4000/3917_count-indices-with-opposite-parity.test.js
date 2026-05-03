import { describe, expect, test } from 'bun:test';
import { countOppositeParity } from '../../../src/problems/3901-4000/3917_count-indices-with-opposite-parity.js';

const testcases = [
        { nums: [1, 2, 3, 4], expected: [2, 1, 1, 0] },
        { nums: [1], expected: [0] },
];

describe('countOppositeParity', () => {
        test.each(
                structuredClone(testcases),
        )('countOppositeParity($nums) -> $expected', ({ nums, expected }) => {
                expect(Array.from(countOppositeParity(nums))).toStrictEqual(
                        expected,
                );
        });
});
