import { describe, expect, test } from 'bun:test';
import { rotateRight } from '../../../src/problems/0001-0100/0061_rotate-list.js';
import { arrayToList, listToArray } from '../../utils/linked-list.js';

const testcases = [
        { head: [1, 2, 3, 4, 5], k: 2, expected: [4, 5, 1, 2, 3] },
        { head: [0, 1, 2], k: 4, expected: [2, 0, 1] },
];

describe('rotateRight', () => {
        test.each(
                structuredClone(testcases),
        )('rotateRight($head, $k) -> $expected', ({ head, k, expected }) => {
                expect(
                        listToArray(rotateRight(arrayToList(head), k)),
                ).toStrictEqual(expected);
        });
});
