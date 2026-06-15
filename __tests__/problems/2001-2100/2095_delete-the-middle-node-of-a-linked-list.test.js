import { describe, expect, test } from 'bun:test';
import { deleteMiddle } from '../../../src/problems/2001-2100/2095_delete-the-middle-node-of-a-linked-list.js';
import { arrayToList, listToArray } from '../../utils/linked-list.js';

const testcases = [
        { head: [1, 3, 4, 7, 1, 2, 6], expected: [1, 3, 4, 1, 2, 6] },
        { head: [1, 2, 3, 4], expected: [1, 2, 4] },
        { head: [2, 1], expected: [2] },
        { head: [4], expected: [] },
];

describe('deleteMiddle', () => {
        test.each(
                structuredClone(testcases),
        )('deleteMiddle($head) -> $expected', ({ head, expected }) => {
                expect(
                        listToArray(deleteMiddle(arrayToList(head))),
                ).toStrictEqual(expected);
        });
});
