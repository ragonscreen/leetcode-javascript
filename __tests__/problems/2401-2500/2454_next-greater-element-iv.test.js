import { describe, expect, test } from 'bun:test';

import {
        secondGreaterElement,
        secondGreaterElement1,
        secondGreaterElement2,
} from '../../../src/problems/2401-2500/2454_next-greater-element-iv.js';

const testcases = [
        { nums: [2, 4, 0, 9, 6], expected: [9, 6, 6, -1, -1] },
        { nums: [3, 3], expected: [-1, -1] },
        {
                nums: [11, 13, 15, 12, 0, 15, 12, 11, 9],
                expected: [15, 15, -1, -1, 12, -1, -1, -1, -1],
        },
];

describe('secondGreaterElement', () => {
        test.each(structuredClone(testcases))(
                'secondGreaterElement($nums) -> $expected',
                ({ nums, expected }) => {
                        expect([...secondGreaterElement(nums)]).toStrictEqual(expected);
                },
        );
});

describe('secondGreaterElement1', () => {
        test.each(structuredClone(testcases))(
                'secondGreaterElement1($nums) -> $expected',
                ({ nums, expected }) => {
                        expect([...secondGreaterElement1(nums)]).toStrictEqual(expected);
                },
        );
});

describe('secondGreaterElement2', () => {
        test.each(structuredClone(testcases))(
                'secondGreaterElement2($nums) -> $expected',
                ({ nums, expected }) => {
                        expect([...secondGreaterElement2(nums)]).toStrictEqual(expected);
                },
        );
});
