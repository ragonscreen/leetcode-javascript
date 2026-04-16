import { describe, expect, test } from 'bun:test';
import { hasCycle } from '../../../src/problems/0101-0200/0141_linked-list-cycle.js';
import { arrayToList, createCycle } from '../../utils/linked-list.js';

const testcases = [
        { head: [3, 2, 0, -4], pos: 1, expected: true },
        { head: [1, 2], pos: 0, expected: true },
        { head: [1], pos: -1, expected: false },
];

describe('hasCycle', () => {
        test.each(
                structuredClone(testcases),
        )('hasCycle($head, $pos) -> $expected', ({ head, pos, expected }) => {
                expect(
                        hasCycle(createCycle(arrayToList(head), pos)),
                ).toStrictEqual(expected);
        });
});
