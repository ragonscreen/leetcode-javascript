import { describe, expect, test } from 'bun:test';

import { minMoves, minMoves1 } from './3736_minimum-moves-to-equal-array-elements-iii.js';

const testcases = [
        { nums: [2, 1, 3], expected: 3 },
        { nums: [4, 4, 5], expected: 2 },
];

describe('minMoves', () => {
        test.each(structuredClone(testcases))(
                'minMoves($nums) -> $expected',
                ({ nums, expected }) => {
                        expect(minMoves(nums)).toStrictEqual(expected);
                },
        );
});

describe('minMoves1', () => {
        test.each(structuredClone(testcases))(
                'minMoves1($nums) -> $expected',
                ({ nums, expected }) => {
                        expect(minMoves1(nums)).toStrictEqual(expected);
                },
        );
});
