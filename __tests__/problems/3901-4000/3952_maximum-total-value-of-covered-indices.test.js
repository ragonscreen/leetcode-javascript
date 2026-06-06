import { describe, expect, test } from 'bun:test';
import {
        maxTotal,
        maxTotal1,
} from '../../../src/problems/3901-4000/3952_maximum-total-value-of-covered-indices.js';

const testcases = [
        { nums: [9, 2, 6, 1], s: '0101', expected: 15 },
        { nums: [5, 1, 4], s: '001', expected: 4 },
        { nums: [9, 3, 5], s: '011', expected: 14 },
];

describe('maxTotal', () => {
        test.each(
                structuredClone(testcases),
        )('maxTotal($nums, $s) -> $expected', ({ nums, s, expected }) => {
                expect(maxTotal(nums, s)).toStrictEqual(expected);
        });
});

describe('maxTotal1', () => {
        test.each(
                structuredClone(testcases),
        )('maxTotal1($nums, $s) -> $expected', ({ nums, s, expected }) => {
                expect(maxTotal1(nums, s)).toStrictEqual(expected);
        });
});
