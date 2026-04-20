import { describe, expect, test } from 'bun:test';
import {
        removeNthFromEnd,
        removeNthFromEnd1,
} from '../../../src/problems/0001-0100/0019_remove-nth-node-from-end-of-list.js';
import { arrayToList, listToArray } from '../../utils/linked-list.js';

const testcases = [
        { head: [1, 2, 3, 4, 5], n: 2, expected: [1, 2, 3, 5] },
        { head: [1], n: 1, expected: [] },
        { head: [1, 2], n: 1, expected: [1] },
        { head: [1, 2], n: 2, expected: [2] },
        {
                head: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                n: 4,
                expected: [1, 2, 3, 4, 5, 7, 8, 9],
        },
];

describe('removeNthFromEnd', () => {
        test.each(
                structuredClone(testcases),
        )('removeNthFromEnd($head, $n) -> $expected', ({
                head,
                n,
                expected,
        }) => {
                expect(
                        listToArray(removeNthFromEnd(arrayToList(head), n)),
                ).toStrictEqual(expected);
        });
});

describe('removeNthFromEnd1', () => {
        test.each(
                structuredClone(testcases),
        )('removeNthFromEnd1($head, $n) -> $expected', ({
                head,
                n,
                expected,
        }) => {
                expect(
                        listToArray(removeNthFromEnd1(arrayToList(head), n)),
                ).toStrictEqual(expected);
        });
});
