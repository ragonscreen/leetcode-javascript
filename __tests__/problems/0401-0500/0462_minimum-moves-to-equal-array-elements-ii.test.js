import { describe, expect, test } from 'bun:test';
import { minMoves2 } from '../../../src/problems/0401-0500/0462_minimum-moves-to-equal-array-elements-ii.js';

const testcases = [
        { nums: [1, 2, 3], expected: 2 },
        { nums: [1, 10, 2, 9], expected: 16 },
];

describe('minMoves2', () => {
        test.each(
                structuredClone(testcases),
        )('minMoves2($nums) -> $expected', ({ nums, expected }) => {
                expect(minMoves2(nums)).toStrictEqual(expected);
        });
});
