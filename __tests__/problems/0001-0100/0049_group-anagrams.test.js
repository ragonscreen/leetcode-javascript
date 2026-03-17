import { describe, expect, test } from 'bun:test';
import { groupAnagrams } from '../../../src/problems/0001-0100/0049_group-anagrams.js';
import { arrDeepSort } from '../../utils/array.js';

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
        test.each(
                structuredClone(testcases),
        )('groupAnagrams($strs) -> $expected', ({ strs, expected }) => {
                expect(
                        arrDeepSort(groupAnagrams(strs), 'string'),
                ).toStrictEqual(arrDeepSort(expected, 'string'));
        });
});
