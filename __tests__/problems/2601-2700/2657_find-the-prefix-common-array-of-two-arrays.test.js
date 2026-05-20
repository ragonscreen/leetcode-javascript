import { describe, expect, test } from 'bun:test';
import { findThePrefixCommonArray } from '../../../src/problems/2601-2700/2657_find-the-prefix-common-array-of-two-arrays.js';

const testcases = [
        { A: [1, 3, 2, 4], B: [3, 1, 2, 4], expected: [0, 2, 3, 4] },
        { A: [2, 3, 1], B: [3, 1, 2], expected: [0, 1, 3] },
        { A: [1, 2, 3, 4], B: [1, 3, 4, 2], expected: [1, 1, 2, 4] },
];

describe('findThePrefixCommonArray', () => {
        test.each(
                structuredClone(testcases),
        )('findThePrefixCommonArray($A, $B) -> $expected', ({
                A,
                B,
                expected,
        }) => {
                expect(
                        Array.from(findThePrefixCommonArray(A, B)),
                ).toStrictEqual(expected);
        });
});
