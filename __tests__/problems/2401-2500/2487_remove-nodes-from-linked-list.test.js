import { describe, expect, test } from 'bun:test';
import { removeNodes } from '../../../src/problems/2401-2500/2487_remove-nodes-from-linked-list.js';
import { arrayToList, listToArray } from '../../utils/linked-list.js';

const testcases = [
        { head: [5, 2, 13, 3, 8], expected: [13, 8] },
        { head: [1, 1, 1, 1], expected: [1, 1, 1, 1] },
];

describe('removeNodes', () => {
        test.each(
                structuredClone(testcases),
        )('removeNodes($head) -> $expected', ({ head, expected }) => {
                expect(
                        listToArray(removeNodes(arrayToList(head))),
                ).toStrictEqual(expected);
        });
});
