import { describe, expect, test } from 'vitest';
import { removeElement } from '../../../src/problems/solved/0027_remove-element.js';

describe('removeElement', () => {
        test('basic test 1', () => {
                const nums = [3, 2, 2, 3];
                const val = 3;
                const expectedNums = [2, 2];
                const k = removeElement(nums, val);

                expect(k).toStrictEqual(2);

                for (let i = 0; i < k; i++) {
                        expect(nums[i]).toStrictEqual(expectedNums[i]);
                }
        });

        test('basic test 2', () => {
                const nums = [0, 1, 2, 2, 3, 0, 4, 2];
                const val = 2;
                const expectedNums = [0, 1, 3, 0, 4];
                const k = removeElement(nums, val);

                expect(k).toStrictEqual(5);

                for (let i = 0; i < k; i++) {
                        expect(nums[i]).toStrictEqual(expectedNums[i]);
                }
        });
});
