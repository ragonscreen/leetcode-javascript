import { describe, expect, test } from 'bun:test';
import { maxValue } from '../../../src/problems/1801-1900/1802_maximum-value-at-a-given-index-in-a-bounded-array.js';

const testcases = [
        { n: 4, index: 2, maxSum: 6, expected: 2 },
        { n: 6, index: 1, maxSum: 10, expected: 3 },
        { n: 4_518_736, index: 4_442_833, maxSum: 88_611_770, expected: 9171 },
        { n: 7, index: 5, maxSum: 30, expected: 6 },
];

describe('maxValue', () => {
        test.each(
                structuredClone(testcases),
        )('maxValue($n, $index, $maxSum) -> $expected', ({
                n,
                index,
                maxSum,
                expected,
        }) => {
                expect(maxValue(n, index, maxSum)).toStrictEqual(expected);
        });
});
