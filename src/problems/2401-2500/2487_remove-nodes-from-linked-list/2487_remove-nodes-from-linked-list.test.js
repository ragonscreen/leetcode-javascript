import { describe, expect, test } from 'bun:test';

import { arrayToList, listToArray } from '../../../utils/test-utils/linked-list.js';
import { removeNodes } from './2487_remove-nodes-from-linked-list.js';

const testcases = [
        { head: [5, 2, 13, 3, 8], expected: [13, 8] },
        { head: [1, 1, 1, 1], expected: [1, 1, 1, 1] },
];

describe('removeNodes', () => {
        test.each(structuredClone(testcases))(
                'removeNodes($head) -> $expected',
                ({ head, expected }) => {
                        expect(listToArray(removeNodes(arrayToList(head)))).toStrictEqual(expected);
                },
        );
});
