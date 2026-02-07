// biome-ignore-all lint/complexity/noExcessiveLinesPerFunction: multiple tests in one describe function

import { describe, expect, test } from 'bun:test';
import { groupAnagrams } from '../../../src/problems/solved/0049_group-anagrams.js';
import { arrDeepSortAlpha } from '../../utils/arrays.js';

describe('groupAnagrams', () => {
        test('groups anagrams when more than one group exists', () => {
                const received = groupAnagrams([
                        'eat',
                        'tea',
                        'tan',
                        'ate',
                        'nat',
                        'bat',
                ]);
                const expected = [
                        ['bat'],
                        ['nat', 'tan'],
                        ['ate', 'eat', 'tea'],
                ];

                expect(arrDeepSortAlpha(expected)).toStrictEqual(
                        arrDeepSortAlpha(received),
                );
        });

        test('handles empty strings', () => {
                const received = groupAnagrams(['']);
                const expected = [['']];

                expect(arrDeepSortAlpha(expected)).toStrictEqual(
                        arrDeepSortAlpha(received),
                );
        });

        test('handles single elements', () => {
                const received = groupAnagrams(['a']);
                const expected = [['a']];

                expect(arrDeepSortAlpha(expected)).toStrictEqual(
                        arrDeepSortAlpha(received),
                );
        });

        test('handles medium length strings', () => {
                const received = groupAnagrams([
                        'xyzzzzzzzzzzzz',
                        'zzzzzzzzzzzzyx',
                ]);

                const expected = [['xyzzzzzzzzzzzz', 'zzzzzzzzzzzzyx']];

                expect(arrDeepSortAlpha(expected)).toStrictEqual(
                        arrDeepSortAlpha(received),
                );
        });

        test('handles strings with length 100', () => {
                const strA = 'a'.repeat(50) + 'z'.repeat(50);
                const strB = 'z'.repeat(50) + 'a'.repeat(50);
                const received = groupAnagrams([strA, strB]);
                const expected = [[strA, strB]];

                expect(arrDeepSortAlpha(expected)).toStrictEqual(
                        arrDeepSortAlpha(received),
                );
        });
});
