import { describe, expect, test } from 'bun:test';
import {
        minimalKSum,
        minimalKSum1,
        minimalKSum2,
        minimalKSum3,
} from '../../../src/problems/2101-2200/2195_append-k-integers-with-minimal-sum.js';

const testcases = [
        { nums: [1, 4, 25, 10, 25], k: 2, expected: 5 },
        { nums: [5, 6], k: 6, expected: 25 },
        {
                nums: [
                        96, 44, 99, 25, 61, 84, 88, 18, 19, 33, 60, 86, 52, 19,
                        32, 47, 35, 50, 94, 17, 29, 98, 22, 21, 72, 100, 40, 84,
                ],
                k: 35,
                expected: 794,
        },
        {
                nums: [1_000_000_000],
                k: 100_000_000,
                expected: 5_000_000_050_000_000,
        },
        {
                nums: [
                        53, 41, 90, 33, 84, 26, 50, 32, 63, 47, 66, 43, 29, 88,
                        71, 28, 83,
                ],
                k: 76,
                expected: 3444,
        },
];

describe('minimalKSum', () => {
        test.each(
                structuredClone(testcases),
        )('minimalKSum($nums, $k) -> $expected', ({ nums, k, expected }) => {
                expect(minimalKSum(nums, k)).toStrictEqual(expected);
        });
});

describe.skip('minimalKSum1', () => {
        test.each(
                structuredClone(testcases),
        )('minimalKSum1($nums, $k) -> $expected', ({ nums, k, expected }) => {
                expect(minimalKSum1(nums, k)).toStrictEqual(expected);
        });
});

describe.skip('minimalKSum2', () => {
        test.each(
                structuredClone(testcases),
        )('minimalKSum2($nums, $k) -> $expected', ({ nums, k, expected }) => {
                expect(minimalKSum2(nums, k)).toStrictEqual(expected);
        });
});

describe.skip('minimalKSum3', () => {
        test.each(
                structuredClone(testcases),
        )('minimalKSum3($nums, $k) -> $expected', ({ nums, k, expected }) => {
                expect(minimalKSum3(nums, k)).toStrictEqual(expected);
        });
});
