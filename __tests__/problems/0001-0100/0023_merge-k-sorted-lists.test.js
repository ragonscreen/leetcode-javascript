import { describe, expect, test } from 'bun:test';
import {
        mergeKLists,
        mergeKLists1,
        mergeKLists2,
} from '../../../src/problems/0001-0100/0023_merge-k-sorted-lists.js';
import { arrayToList, listToArray } from '../../utils/linked-list.js';

const testcases = [
        {
                lists: [
                        [1, 4, 5],
                        [1, 3, 4],
                        [2, 6],
                ],
                expected: [1, 1, 2, 3, 4, 4, 5, 6],
        },
        { lists: [], expected: [] },
        { lists: [[]], expected: [] },
];

describe('mergeKLists', () => {
        test.each(
                structuredClone(testcases),
        )('mergeKLists($lists) -> $expected', ({ lists, expected }) => {
                expect(
                        listToArray(mergeKLists(lists.map(arrayToList))),
                ).toStrictEqual(expected);
        });
});

describe('mergeKLists1', () => {
        test.each(
                structuredClone(testcases),
        )('mergeKLists1($lists) -> $expected', ({ lists, expected }) => {
                expect(
                        listToArray(mergeKLists1(lists.map(arrayToList))),
                ).toStrictEqual(expected);
        });
});

describe('mergeKLists2', () => {
        test.each(
                structuredClone(testcases),
        )('mergeKLists2($lists) -> $expected', ({ lists, expected }) => {
                expect(
                        listToArray(mergeKLists2(lists.map(arrayToList))),
                ).toStrictEqual(expected);
        });
});
