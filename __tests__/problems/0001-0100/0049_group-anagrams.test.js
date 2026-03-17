import { describe, expect, test } from 'bun:test';
import { groupAnagrams } from '../../../src/problems/0001-0100/0049_group-anagrams.js';
import { normaliseNestedArray } from '../../utils/utils.js';

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
                expect(normaliseNestedArray(groupAnagrams(strs))).toStrictEqual(
                        normaliseNestedArray(expected),
                );
        });
});
