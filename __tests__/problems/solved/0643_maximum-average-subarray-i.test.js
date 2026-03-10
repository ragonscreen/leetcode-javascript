import { describe, expect, test } from 'bun:test';
import { findMaxAverage } from '../../../src/problems/solved/0643_maximum-average-subarray-i.js';

describe('findMaxAverage', () => {
        test('basic test 1', () => {
                expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toStrictEqual(
                        12.75,
                );
        });

        test('basic test 2', () => {
                expect(findMaxAverage([5], 1)).toStrictEqual(5);
        });

        test('basic test 3', () => {
                expect(findMaxAverage([-1], 1)).toStrictEqual(-1);
        });

        test('basic test 4', () => {
                expect(findMaxAverage([0, 1, 1, 3, 3], 4)).toStrictEqual(2);
        });
});
