import { describe, expect, test } from 'bun:test';

import { arrayToList, listToArray } from '../../../utils/test-utils/linked-list.js';
import { reverseList } from './0206_reverse-linked-list.js';

const testcases = [
        { head: [1, 2, 3, 4, 5], expected: [5, 4, 3, 2, 1] },
        { head: [1, 2], expected: [2, 1] },
        { head: [], expected: [] },
];

describe('reverseList', () => {
        test.each(structuredClone(testcases))(
                'reverseList($head) -> $expected',
                ({ head, expected }) => {
                        expect(listToArray(reverseList(arrayToList(head)))).toStrictEqual(expected);
                },
        );
});
