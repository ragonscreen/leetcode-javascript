import { describe, expect, test } from 'bun:test';
import { twoSum } from '../../../src/problems/solved/0167_two-sum-ii-input-array-is-sorted.js';

describe('twoSum', () => {
        test('basic test 1', () => {
                expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([1, 2]);
        });

        test('basic test 2', () => {
                expect(twoSum([2, 3, 4], 6)).toStrictEqual([1, 3]);
        });

        test('basic test 3', () => {
                expect(twoSum([-1, 0], -1)).toStrictEqual([1, 2]);
        });
});
