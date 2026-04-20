import { describe, expect, test } from 'bun:test';
import { addTwoNumbers } from '../../../src/problems/0001-0100/0002_add-two-numbers.js';
import { arrayToList, listToArray } from '../../utils/linked-list.js';

const testcases = [
        { l1: [2, 4, 3], l2: [5, 6, 4], expected: [7, 0, 8] },
        { l1: [0], l2: [0], expected: [0] },
        {
                l1: [9, 9, 9, 9, 9, 9, 9],
                l2: [9, 9, 9, 9],
                expected: [8, 9, 9, 9, 0, 0, 0, 1],
        },
];

describe('addTwoNumbers', () => {
        test.each(
                structuredClone(testcases),
        )('addTwoNumbers($l1, $l2) -> $expected', ({ l1, l2, expected }) => {
                expect(
                        listToArray(
                                addTwoNumbers(arrayToList(l1), arrayToList(l2)),
                        ),
                ).toStrictEqual(expected);
        });
});
