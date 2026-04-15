import { describe, expect, test } from 'bun:test';
import { reverseList } from '../../../src/problems/0201-0300/0206_reverse-linked-list.js';
import { arrayToList, listToArray } from '../../utils/linked-list.js';

const testcases = [
        { head: [1, 2, 3, 4, 5], expected: [5, 4, 3, 2, 1] },
        { head: [1, 2], expected: [2, 1] },
        { head: [], expected: [] },
];

describe('reverseList', () => {
        test.each(
                structuredClone(testcases),
        )('reverseList($head) -> $expected', ({ head, expected }) => {
                expect(
                        listToArray(reverseList(arrayToList(head))),
                ).toStrictEqual(expected);
        });
});
