import { describe, expect, test } from 'bun:test';
import {
        canArrange,
        canArrange1,
} from '../../../src/problems/1401-1500/1497_check-if-array-pairs-are-divisible-by-k.js';

const testcases = [
        { arr: [1, 2, 3, 4, 5, 10, 6, 7, 8, 9], k: 5, expected: true },
        { arr: [1, 2, 3, 4, 5, 6], k: 7, expected: true },
        { arr: [1, 2, 3, 4, 5, 6], k: 10, expected: false },
        { arr: [-1, 1, -2, 2, -3, 3, -4, 4], k: 3, expected: true },
        { arr: [-1, -2], k: 3, expected: true },
];

describe('canArrange', () => {
        test.each(
                structuredClone(testcases),
        )('canArrange($arr, $k) -> $expected', ({ arr, k, expected }) => {
                expect(canArrange(arr, k)).toStrictEqual(expected);
        });
});

describe('canArrange1', () => {
        test.each(
                structuredClone(testcases),
        )('canArrange1($arr, $k) -> $expected', ({ arr, k, expected }) => {
                expect(canArrange1(arr, k)).toStrictEqual(expected);
        });
});
