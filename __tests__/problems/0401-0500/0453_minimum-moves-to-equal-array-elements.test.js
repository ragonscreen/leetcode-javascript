import { describe, expect, test } from 'bun:test';
import { minMoves } from '../../../src/problems/0401-0500/0453_minimum-moves-to-equal-array-elements.js';

const testcases = [
        { nums: [1, 2, 3], expected: 3 },
        { nums: [1, 1, 1], expected: 0 },
];

describe('minMoves', () => {
        test.each(structuredClone(testcases))('minMoves($nums) -> $expected', ({
                nums,
                expected,
        }) => {
                expect(minMoves(nums)).toStrictEqual(expected);
        });
});
