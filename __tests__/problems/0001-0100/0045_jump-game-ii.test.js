import { describe, expect, test } from 'bun:test';
import { jump } from '../../../src/problems/0001-0100/0045_jump-game-ii.js';

const testcases = [
        { nums: [2, 3, 1, 1, 4], expected: 2 },
        { nums: [2, 3, 0, 1, 4], expected: 2 },
        { nums: [2], expected: 0 },
        { nums: [2, 1], expected: 1 },
        // { nums: [2, 0, 0, 0], expected: -1 }, // valid testcase outside of constraint
];

describe('jump', () => {
        test.each(structuredClone(testcases))('jump($nums) -> $expected', ({
                nums,
                expected,
        }) => {
                expect(jump(nums)).toStrictEqual(expected);
        });
});
