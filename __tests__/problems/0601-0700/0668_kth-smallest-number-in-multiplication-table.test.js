import { describe, expect, test } from 'bun:test';
import {
        findKthNumber,
        findKthNumber1,
} from '../../../src/problems/0601-0700/0668_kth-smallest-number-in-multiplication-table.js';

const testcases = [
        { m: 3, n: 3, k: 5, expected: 3 },
        { m: 2, n: 3, k: 6, expected: 6 },
];

describe('findKthNumber', () => {
        test.each(
                structuredClone(testcases),
        )('findKthNumber($m, $n, $k) -> $expected', ({ m, n, k, expected }) => {
                expect(findKthNumber(m, n, k)).toStrictEqual(expected);
        });
});

describe('findKthNumber1', () => {
        test.each(
                structuredClone(testcases),
        )('findKthNumber1($m, $n, $k) -> $expected', ({
                m,
                n,
                k,
                expected,
        }) => {
                expect(findKthNumber1(m, n, k)).toStrictEqual(expected);
        });
});
