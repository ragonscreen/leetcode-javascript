import { describe, expect, test } from 'bun:test';

import { arrDeepSort } from '../../../utils/test-utils/array.js';
import { groupAnagrams } from './0049_group-anagrams.js';

const testcases = [
        {
                strs: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'],
                expected: [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']],
        },
        { strs: [''], expected: [['']] },
        { strs: ['a'], expected: [['a']] },
        {
                strs: ['xyzzzzzzzzzzzz', 'zzzzzzzzzzzzyx'],
                expected: [['xyzzzzzzzzzzzz', 'zzzzzzzzzzzzyx']],
        },
];

describe('groupAnagrams', () => {
        test.each(structuredClone(testcases))(
                'groupAnagrams($strs) -> $expected',
                ({ strs, expected }) => {
                        expect(arrDeepSort(groupAnagrams(strs), 'string')).toStrictEqual(
                                arrDeepSort(expected, 'string'),
                        );
                },
        );
});
