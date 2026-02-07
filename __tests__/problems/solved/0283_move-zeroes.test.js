import { describe, expect, test } from 'bun:test';
import { moveZeroes } from '../../../src/problems/solved/0283_move-zeroes.js';

describe('moveZeroes', () => {
        test('basic test 1', () => {
                expect(moveZeroes([0, 1, 0, 3, 12])).toStrictEqual([
                        1, 3, 12, 0, 0,
                ]);
        });

        test('basic test 1', () => {
                expect(moveZeroes([0])).toStrictEqual([0]);
        });
});
