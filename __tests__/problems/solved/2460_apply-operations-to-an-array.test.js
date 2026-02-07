import { describe, expect, test } from 'bun:test';
import { applyOperations } from '../../../src/problems/solved/2460_apply-operations-to-an-array.js';

describe('applyOperations', () => {
        test('basic test 1', () => {
                expect(applyOperations([1, 2, 2, 1, 1, 0])).toStrictEqual([
                        1, 4, 2, 0, 0, 0,
                ]);
        });

        test('basic test 2', () => {
                expect(applyOperations([0, 1])).toStrictEqual([1, 0]);
        });
});
