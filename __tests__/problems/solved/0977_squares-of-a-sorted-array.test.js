import { describe, expect, test } from 'bun:test';
import { sortedSquares } from '../../../src/problems/solved/0977_squares-of-a-sorted-array.js';

describe('sortedSquares', () => {
        test('basic test 1', () => {
                expect(sortedSquares([-4, -1, 0, 3, 10])).toStrictEqual([
                        0, 1, 9, 16, 100,
                ]);
        });

        test('basic test 2', () => {
                expect(sortedSquares([-7, -3, 2, 3, 11])).toStrictEqual([
                        4, 9, 9, 49, 121,
                ]);
        });

        test('custom test 1', () => {
                expect(sortedSquares([-7, -3, 3, 11])).toStrictEqual([
                        9, 9, 49, 121,
                ]);
        });
});
