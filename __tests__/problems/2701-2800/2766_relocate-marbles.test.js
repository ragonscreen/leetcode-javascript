import { describe, expect, test } from 'bun:test';
import { relocateMarbles } from '../../../src/problems/2701-2800/2766_relocate-marbles.js';

const testcases = [
        {
                nums: [1, 6, 7, 8],
                moveFrom: [1, 7, 2],
                moveTo: [2, 9, 5],
                expected: [5, 6, 8, 9],
        },
        { nums: [1, 1, 3, 3], moveFrom: [1, 3], moveTo: [2, 2], expected: [2] },
];

describe('relocateMarbles', () => {
        test.each(
                structuredClone(testcases),
        )('relocateMarbles($nums, $moveFrom, $moveTo) -> $expected', ({
                nums,
                moveFrom,
                moveTo,
                expected,
        }) => {
                expect(
                        Array.from(relocateMarbles(nums, moveFrom, moveTo)),
                ).toStrictEqual(expected);
        });
});
