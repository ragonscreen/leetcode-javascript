import { describe, expect, test } from 'bun:test';
import { predictTheWinner } from '../../../src/problems/0401-0500/0486_predict-the-winner.js';

const testcases = [
        { nums: [1, 5, 2], expected: false },
        { nums: [1, 5, 233, 7], expected: true },
        { nums: [1, 3, 4, 7, 2], expected: false },
        { nums: [0, 0, 7, 6, 5, 6, 1], expected: false },
        { nums: [1, 2, 9], expected: true },
];

describe('predictTheWinner', () => {
        test.each(
                structuredClone(testcases),
        )('predictTheWinner($nums) -> $expected', ({ nums, expected }) => {
                expect(predictTheWinner(nums)).toStrictEqual(expected);
        });
});
