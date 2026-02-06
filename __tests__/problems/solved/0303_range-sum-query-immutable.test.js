import { describe, expect, test } from 'vitest';
import { NumArray } from '../../../src/problems/solved/0303_range-sum-query-immutable.js';

describe('NumArray', () => {
        test('basic test 1', () => {
                const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
                expect(numArray.sumRange(0, 2)).toStrictEqual(1);
                expect(numArray.sumRange(2, 5)).toStrictEqual(-1);
                expect(numArray.sumRange(0, 5)).toStrictEqual(-3);
        });
});
