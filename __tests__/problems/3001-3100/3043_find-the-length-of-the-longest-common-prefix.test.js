import { describe, expect, test } from 'bun:test';
import { longestCommonPrefix } from '../../../src/problems/3001-3100/3043_find-the-length-of-the-longest-common-prefix.js';

const testcases = [
        { arr1: [1, 10, 100], arr2: [1000], expected: 3 },
        { arr1: [1, 2, 3], arr2: [4, 4, 4], expected: 0 },
        { arr1: [1, 10, 100, 234], arr2: [100], expected: 3 },
        {
                arr1: [4400, 3262, 9421],
                arr2: [1757, 8361, 3991, 4425],
                expected: 2,
        },
];

describe('longestCommonPrefix', () => {
        test.each(
                structuredClone(testcases),
        )('longestCommonPrefix($arr1, $arr2) -> $expected', ({
                arr1,
                arr2,
                expected,
        }) => {
                expect(longestCommonPrefix(arr1, arr2)).toStrictEqual(expected);
        });
});
