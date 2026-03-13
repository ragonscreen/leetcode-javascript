import { describe, expect, test } from 'bun:test';
import { rearrangeArray } from '../../../src/problems/solved/2149_rearrange-array-elements-by-sign.js';

describe('rearrangeArray', () => {
        test('basic test 1', () => {
                expect(rearrangeArray([3, 1, -2, -5, 2, -4])).toStrictEqual([
                        3, -2, 1, -5, 2, -4,
                ]);
        });

        test('basic test 2', () => {
                expect(rearrangeArray([-1, 1])).toStrictEqual([1, -1]);
        });
});
