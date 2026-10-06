import { describe, expect, test } from 'bun:test';

import { arrayToList, listToArray } from '../../../utils/test-utils/linked-list.js';
import { rotateRight } from './0061_rotate-list.js';

const testcases = [
        { head: [1, 2, 3, 4, 5], k: 2, expected: [4, 5, 1, 2, 3] },
        { head: [0, 1, 2], k: 4, expected: [2, 0, 1] },
];

describe('rotateRight', () => {
        test.each(structuredClone(testcases))(
                'rotateRight($head, $k) -> $expected',
                ({ head, k, expected }) => {
                        expect(listToArray(rotateRight(arrayToList(head), k))).toStrictEqual(
                                expected,
                        );
                },
        );
});
