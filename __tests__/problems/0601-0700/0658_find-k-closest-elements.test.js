import { describe, expect, test } from 'bun:test';
import {
        findClosestElements,
        findClosestElements1,
} from '../../../src/problems/0601-0700/0658_find-k-closest-elements.js';

const testcases = [
        { arr: [1, 2, 3, 4, 5], k: 4, x: 3, expected: [1, 2, 3, 4] },
        { arr: [1, 1, 2, 3, 4, 5], k: 4, x: -1, expected: [1, 1, 2, 3] },
        { arr: [1, 2, 3, 4, 5], k: 4, x: 6, expected: [2, 3, 4, 5] },
        {
                arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                k: 4,
                x: 8,
                expected: [6, 7, 8, 9],
        },
        {
                arr: [0, 1, 1, 1, 2, 3, 6, 7, 8, 9],
                k: 9,
                x: 4,
                expected: [0, 1, 1, 1, 2, 3, 6, 7, 8],
        },
        { arr: [1, 1, 1, 10, 10, 10], k: 1, x: 9, expected: [10] },
];

describe('findClosestElements', () => {
        test.each(
                structuredClone(testcases),
        )('findClosestElements($arr, $k, $x) -> $expected', ({
                arr,
                k,
                x,
                expected,
        }) => {
                expect(findClosestElements(arr, k, x)).toStrictEqual(expected);
        });
});

describe('findClosestElements1', () => {
        test.each(
                structuredClone(testcases),
        )('findClosestElements1($arr, $k, $x) -> $expected', ({
                arr,
                k,
                x,
                expected,
        }) => {
                expect(findClosestElements1(arr, k, x)).toStrictEqual(expected);
        });
});
