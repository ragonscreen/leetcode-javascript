import { describe, expect, test } from 'bun:test';
import {
        sortTransformedArray,
        sortTransformedArray1,
} from '../../../src/problems/0301-0400/0360_sort-transformed-array.js';

const testcases = [
        { nums: [-4, -2, 2, 4], a: 1, b: 3, c: 5, expected: [3, 9, 15, 33] },
        { nums: [-4, -2, 2, 4], a: -1, b: 3, c: 5, expected: [-23, -5, 1, 7] },
];

describe('sortTransformedArray', () => {
        test.each(
                testcases,
        )('sortTransformedArray($nums, $a, $b, $c) -> $expected', ({
                nums,
                a,
                b,
                c,
                expected,
        }) => {
                expect(sortTransformedArray(nums, a, b, c)).toStrictEqual(
                        expected,
                );
        });
});

describe.skip('sortTransformedArray1', () => {
        test.each(
                testcases,
        )('sortTransformedArray1($nums, $a, $b, $c) -> $expected', ({
                nums,
                a,
                b,
                c,
                expected,
        }) => {
                expect(sortTransformedArray1(nums, a, b, c)).toStrictEqual(
                        expected,
                );
        });
});
