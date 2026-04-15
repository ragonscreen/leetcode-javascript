import { describe, expect, test } from 'bun:test';
import {
        mergeTwoLists,
        mergeTwoLists1,
} from '../../../src/problems/0001-0100/0021_merge-two-sorted-lists.js';
import { arrayToList, listToArray } from '../../utils/linked-list.js';

const testcases = [
        { list1: [1, 2, 4], list2: [1, 3, 4], expected: [1, 1, 2, 3, 4, 4] },
        { list1: [], list2: [], expected: [] },
        { list1: [], list2: [0], expected: [0] },
        { list1: [1, 2], list2: [1, 3, 4], expected: [1, 1, 2, 3, 4] },
        { list1: [1, 2, 4], list2: [1, 3], expected: [1, 1, 2, 3, 4] },
];

describe('mergeTwoLists', () => {
        test.each(
                structuredClone(testcases),
        )('mergeTwoLists($list1, $list2) -> $expected', ({
                list1,
                list2,
                expected,
        }) => {
                expect(
                        listToArray(
                                mergeTwoLists(
                                        arrayToList(list1),
                                        arrayToList(list2),
                                ),
                        ),
                ).toStrictEqual(expected);
        });
});

describe('mergeTwoLists1', () => {
        test.each(
                structuredClone(testcases),
        )('mergeTwoLists1($list1, $list2) -> $expected', ({
                list1,
                list2,
                expected,
        }) => {
                expect(
                        listToArray(
                                mergeTwoLists1(
                                        arrayToList(list1),
                                        arrayToList(list2),
                                ),
                        ),
                ).toStrictEqual(expected);
        });
});
