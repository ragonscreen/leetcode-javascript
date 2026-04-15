import { describe, expect, test } from 'bun:test';
import { canJump } from '../../../src/problems/0001-0100/0055_jump-game.js';

const testcases = [
        { nums: [2, 3, 1, 1, 4], expected: true },
        { nums: [3, 2, 1, 0, 4], expected: false },
        { nums: [2], expected: true },
        { nums: [2, 1], expected: true },
        { nums: [2, 0, 0, 0], expected: false },
];

describe('canJump', () => {
        test.each(structuredClone(testcases))('canJump($nums) -> $expected', ({
                nums,
                expected,
        }) => {
                expect(canJump(nums)).toStrictEqual(expected);
        });
});
