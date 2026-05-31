import { describe, expect, test } from 'bun:test';
import {
        smallestRepunitDivByK,
        smallestRepunitDivByK1,
} from '../../../src/problems/1001-1100/1015_smallest-integer-divisible-by-k.js';

const testcases = [
        { k: 1, expected: 1 },
        { k: 2, expected: -1 },
        { k: 3, expected: 3 },
];

describe('smallestRepunitDivByK', () => {
        test.each(
                structuredClone(testcases),
        )('smallestRepunitDivByK($k) -> $expected', ({ k, expected }) => {
                expect(smallestRepunitDivByK(k)).toStrictEqual(expected);
        });
});

describe('smallestRepunitDivByK1', () => {
        test.each(
                structuredClone(testcases),
        )('smallestRepunitDivByK1($k) -> $expected', ({ k, expected }) => {
                expect(smallestRepunitDivByK1(k)).toStrictEqual(expected);
        });
});
