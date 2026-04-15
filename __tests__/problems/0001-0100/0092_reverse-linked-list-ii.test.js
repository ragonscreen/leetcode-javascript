import { describe, expect, test } from 'bun:test';
import { reverseBetween } from '../../../src/problems/0001-0100/0092_reverse-linked-list-ii.js';
import { arrayToList, listToArray } from '../../utils/linked-list.js';

const testcases = [
        { head: [1, 2, 3, 4, 5], left: 2, right: 4, expected: [1, 4, 3, 2, 5] },
        { head: [5], left: 1, right: 1, expected: [5] },
        { head: [3, 5], left: 1, right: 1, expected: [3, 5] },
        { head: [1, 2, 3, 4, 5], left: 1, right: 5, expected: [5, 4, 3, 2, 1] },
        {
                head: [1, 2, 3, 4, 5, 6],
                left: 1,
                right: 5,
                expected: [5, 4, 3, 2, 1, 6],
        },
        {
                head: [1, 2, 3, 4, 5, 6, 7, 8],
                left: 1,
                right: 5,
                expected: [5, 4, 3, 2, 1, 6, 7, 8],
        },
        { head: [1, 2, 3], left: 2, right: 3, expected: [1, 3, 2] },
];

describe('reverseBetween', () => {
        test.each(
                structuredClone(testcases),
        )('reverseBetween($head, $left, $right) -> $expected', ({
                head,
                left,
                right,
                expected,
        }) => {
                expect(
                        listToArray(
                                reverseBetween(arrayToList(head), left, right),
                        ),
                ).toStrictEqual(expected);
        });
});
