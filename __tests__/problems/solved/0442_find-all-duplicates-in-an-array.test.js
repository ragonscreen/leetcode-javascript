import { describe, expect, test } from 'bun:test';
import { findDuplicates } from '../../../src/problems/solved/0442_find-all-duplicates-in-an-array.js';

describe('findDuplicates', () => {
        test('basic test 1', () => {
                expect(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])).toStrictEqual([
                        2, 3,
                ]);
        });

        test('basic test 2', () => {
                expect(findDuplicates([1, 1, 2])).toStrictEqual([1]);
        });

        test('basic test 3', () => {
                expect(findDuplicates([1])).toStrictEqual([]);
        });
});
