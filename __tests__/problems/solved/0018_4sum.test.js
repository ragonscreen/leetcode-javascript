import { describe, expect, test } from 'bun:test';
import { fourSum } from '../../../src/problems/solved/0018_4sum.js';

describe('fourSum', () => {
        test('basic test 1', () => {
                expect(fourSum([1, 0, -1, 0, -2, 2], 0)).toStrictEqual([
                        [-2, -1, 1, 2],
                        [-2, 0, 0, 2],
                        [-1, 0, 0, 1],
                ]);
        });

        test('basic test 2', () => {
                expect(fourSum([2, 2, 2, 2, 2], 8)).toStrictEqual([
                        [2, 2, 2, 2],
                ]);
        });
});
