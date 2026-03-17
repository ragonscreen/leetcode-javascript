import { describe, expect, test } from 'bun:test';
import { mostFrequentEven } from '../../../src/problems/2401-2500/2404_most-frequent-even-element.js';

const testcases = [
        { nums: [0, 1, 2, 2, 4, 4, 1], expected: 2 },
        { nums: [4, 4, 4, 9, 2, 4], expected: 4 },
        { nums: [29, 47, 21, 41, 13, 37, 25, 7], expected: -1 },
        { nums: [0, 1, 4, 4, 2, 2], expected: 2 },
];

describe('mostFrequentEven', () => {
        test.each(
                structuredClone(testcases),
        )('mostFrequentEven($nums) -> $expected', ({ nums, expected }) => {
                expect(mostFrequentEven(nums)).toStrictEqual(expected);
        });
});
