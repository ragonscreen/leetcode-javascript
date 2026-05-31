import { describe, expect, test } from 'bun:test';
import { nextLargerNodes } from '../../../src/problems/1001-1100/1019_next-greater-node-in-linked-list.js';
import { arrayToList } from '../../utils/linked-list.js';

const testcases = [
        { head: [2, 1, 5], expected: [5, 5, 0] },
        { head: [2, 7, 4, 3, 5], expected: [7, 0, 5, 5, 0] },
];

describe('nextLargerNodes', () => {
        test.each(
                structuredClone(testcases),
        )('nextLargerNodes($head) -> $expected', ({ head, expected }) => {
                expect(nextLargerNodes(arrayToList(head))).toStrictEqual(
                        expected,
                );
        });
});
