import { describe, expect, test } from 'bun:test';
import {
        successfulPairs,
        successfulPairs1,
} from '../../../src/problems/2301-2400/2300_successful-pairs-of-spells-and-potions.js';

const testcases = [
        {
                spells: [5, 1, 3],
                potions: [1, 2, 3, 4, 5],
                success: 7,
                expected: [4, 0, 3],
        },
        {
                spells: [3, 1, 2],
                potions: [8, 5, 8],
                success: 16,
                expected: [2, 0, 2],
        },
];

describe('successfulPairs', () => {
        test.each(
                structuredClone(testcases),
        )('successfulPairs($spells, $potions, $success) -> $expected', ({
                spells,
                potions,
                success,
                expected,
        }) => {
                expect(successfulPairs(spells, potions, success)).toStrictEqual(
                        expected,
                );
        });
});

describe('successfulPairs1', () => {
        test.each(
                structuredClone(testcases),
        )('successfulPairs1($spells, $potions, $success) -> $expected', ({
                spells,
                potions,
                success,
                expected,
        }) => {
                expect(
                        successfulPairs1(spells, potions, success),
                ).toStrictEqual(expected);
        });
});
