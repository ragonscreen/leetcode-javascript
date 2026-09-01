import { describe, expect, test } from 'bun:test';
import { minCost } from '../../../src/problems/3401-3500/3424_minimum-cost-to-make-arrays-identical.js';

const testcases = [
        { arr: [-7, 9, 5], brr: [7, -2, -5], k: 2, expected: 13 },
        { arr: [2, 1], brr: [2, 1], k: 0, expected: 0 },
];

describe('minCost', () => {
        test.each(
                structuredClone(testcases),
        )('minCost($arr, $brr, $k) -> $expected', ({
                arr,
                brr,
                k,
                expected,
        }) => {
                expect(minCost(arr, brr, k)).toStrictEqual(expected);
        });
});
