import { describe, expect, test } from 'bun:test';
import {
        pairSum,
        pairSum1,
} from '../../../src/problems/2101-2200/2130_maximum-twin-sum-of-a-linked-list.js';
import { arrayToList } from '../../utils/linked-list.js';

const testcases = [
        { head: [5, 4, 2, 1], expected: 6 },
        { head: [4, 2, 2, 3], expected: 7 },
        { head: [1, 100_000], expected: 100_001 },
];

describe('pairSum', () => {
        test.each(structuredClone(testcases))('pairSum($head) -> $expected', ({
                head,
                expected,
        }) => {
                expect(pairSum(arrayToList(head))).toStrictEqual(expected);
        });
});

describe('pairSum1', () => {
        test.each(structuredClone(testcases))('pairSum1($head) -> $expected', ({
                head,
                expected,
        }) => {
                expect(pairSum1(arrayToList(head))).toStrictEqual(expected);
        });
});
