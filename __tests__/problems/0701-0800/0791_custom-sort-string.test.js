import { describe, expect, test } from 'bun:test';
import {
        customSortString,
        customSortString1,
} from '../../../src/problems/0701-0800/0791_custom-sort-string.js';

const testcases = [
        { order: 'cba', s: 'abcd', expected: ['cbad', 'dcba', 'cdba', 'cbda'] },
        {
                order: 'bcafg',
                s: 'abcd',
                expected: ['bcad', 'bcda', 'bdca', 'dbca'],
        },
        {
                order: 'exv',
                s: 'xwvee',
                expected: ['eexvw', 'eexwv', 'eewxv', 'ewexv', 'weexv'],
        },
];

describe('customSortString', () => {
        test.each(
                structuredClone(testcases),
        )('customSortString($order, $s) -> $expected', ({
                order,
                s,
                expected,
        }) => {
                expect(customSortString(order, s)).toBeOneOf(expected);
        });
});

describe('customSortString1', () => {
        test.each(
                structuredClone(testcases),
        )('customSortString1($order, $s) -> $expected', ({
                order,
                s,
                expected,
        }) => {
                expect(customSortString1(order, s)).toBeOneOf(expected);
        });
});
