import { describe, expect, test } from 'bun:test';
import { removeDuplicates } from '../../../src/problems/solved/1209_remove-all-adjacent-duplicates-in-string-ii.js';

describe('removeDuplicates', () => {
        test('basic test 1', () => {
                expect(removeDuplicates('abcd', 2)).toStrictEqual('abcd');
        });

        test('basic test 2', () => {
                expect(removeDuplicates('deeedbbcccbdaa', 3)).toStrictEqual(
                        'aa',
                );
        });

        test('basic test 3', () => {
                expect(
                        removeDuplicates('pbbcggttciiippooaais', 2),
                ).toStrictEqual('ps');
        });
});
