import { describe, expect, test } from 'bun:test';
import {
        maxSpending,
        maxSpending1,
} from '../../../src/problems/2901-3000/2931_maximum-spending-after-buying-items.js';

const testcases = [
        {
                values: [
                        [8, 5, 2],
                        [6, 4, 1],
                        [9, 7, 3],
                ],
                expected: 285,
        },
        {
                values: [
                        [10, 8, 6, 4, 2],
                        [9, 7, 5, 3, 2],
                ],
                expected: 386,
        },
        {
                values: [[1], [2]],
                expected: 5,
        },
];

describe('maxSpending', () => {
        test.each(
                structuredClone(testcases),
        )('maxSpending($values) -> $expected', ({ values, expected }) => {
                expect(maxSpending(values)).toStrictEqual(expected);
        });
});

describe('maxSpending1', () => {
        test.each(
                structuredClone(testcases),
        )('maxSpending1($values) -> $expected', ({ values, expected }) => {
                expect(maxSpending1(values)).toStrictEqual(expected);
        });
});
