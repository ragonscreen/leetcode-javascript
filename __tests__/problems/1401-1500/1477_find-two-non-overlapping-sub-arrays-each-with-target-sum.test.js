import { describe, expect, test } from 'bun:test';

import {
        minSumOfLengths,
        minSumOfLengths1,
} from '../../../src/problems/1401-1500/1477_find-two-non-overlapping-sub-arrays-each-with-target-sum.js';

const testcases = [
        { arr: [3, 2, 2, 4, 3], target: 3, expected: 2 },
        { arr: [7, 3, 4, 7], target: 7, expected: 2 },
        { arr: [4, 3, 2, 6, 2, 3, 4], target: 6, expected: -1 },
        { arr: [9, 9, 9, 9, 9], target: 2, expected: -1 },
        { arr: [2, 1, 3, 3, 2, 3, 1], target: 6, expected: 5 },
        { arr: [1, 6, 1], target: 7, expected: -1 },
        { arr: [2, 3, 4, 5, 4], target: 9, expected: 5 },
];

describe('minSumOfLengths', () => {
        test.each(structuredClone(testcases))(
                'minSumOfLengths($arr, $target) -> $expected',
                ({ arr, target, expected }) => {
                        expect(minSumOfLengths(arr, target)).toStrictEqual(expected);
                },
        );
});

describe('minSumOfLengths1', () => {
        test.each(structuredClone(testcases))(
                'minSumOfLengths1($arr, $target) -> $expected',
                ({ arr, target, expected }) => {
                        expect(minSumOfLengths1(arr, target)).toStrictEqual(expected);
                },
        );
});
