import { describe, expect, test } from 'bun:test';
import { reorderList } from '../../../src/problems/0101-0200/0143_reorder-list.js';
import { arrayToList, listToArray } from '../../utils/linked-list.js';

const testcases = [
        { head: [1, 2, 3, 4, 5, 6, 7], expected: [1, 7, 2, 6, 3, 5, 4] },
        { head: [1, 2, 3, 4, 5, 6], expected: [1, 6, 2, 5, 3, 4] },
        { head: [1, 2, 3, 4, 5], expected: [1, 5, 2, 4, 3] },
        { head: [1, 2, 3, 4], expected: [1, 4, 2, 3] },
        { head: [1, 2, 3], expected: [1, 3, 2] },
        { head: [1, 2], expected: [1, 2] },
        { head: [1], expected: [1] },
];

describe('reorderList', () => {
        test.each(
                structuredClone(testcases),
        )('reorderList($head) -> $expected', ({ head, expected }) => {
                const list = arrayToList(head);
                expect(reorderList(list)).toBeNil();
                expect(listToArray(list)).toStrictEqual(expected);
        });
});
