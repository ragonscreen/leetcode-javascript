import { describe, expect, test } from 'bun:test';
import { maxStrength } from '../../../src/problems/2701-2800/2708_maximum-strength-of-a-group.js';

const testcases = [
        { nums: [3, -1, -5, 2, 5, -9], expected: 1350 },
        { nums: [-4, -5, -4], expected: 20 },
        { nums: [-1, -5, -9], expected: 45 },
        { nums: [-5, -9], expected: 45 },
        { nums: [-5], expected: -5 },
        { nums: [-5, 0], expected: 0 },
];

describe('maxStrength', () => {
        test.each(
                structuredClone(testcases),
        )('maxStrength($nums) -> $expected', ({ nums, expected }) => {
                expect(maxStrength(nums)).toStrictEqual(expected);
        });
});
