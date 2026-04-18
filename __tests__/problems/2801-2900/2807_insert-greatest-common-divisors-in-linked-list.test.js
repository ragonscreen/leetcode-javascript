import { describe, expect, test } from 'bun:test';
import { insertGreatestCommonDivisors } from '../../../src/problems/2801-2900/2807_insert-greatest-common-divisors-in-linked-list.js';
import { arrayToList, listToArray } from '../../utils/linked-list.js';

const testcases = [
        { head: [18, 6, 10, 3], expected: [18, 6, 6, 2, 10, 1, 3] },
        { head: [7], expected: [7] },
];

describe('insertGreatestCommonDivisors', () => {
        test.each(
                structuredClone(testcases),
        )('insertGreatestCommonDivisors($head) -> $expected', ({
                head,
                expected,
        }) => {
                expect(
                        listToArray(
                                insertGreatestCommonDivisors(arrayToList(head)),
                        ),
                ).toStrictEqual(expected);
        });
});
