import { describe, expect, test } from 'vitest';
import { removeDuplicates } from '../src/problems/solved/0026_remove-duplicates-from-sorted-array.js';

describe('removeDuplicates', () => {
        test('basic test 1', () => {
                const nums = [1, 1, 2];
                const expectedNums = [1, 2];
                const k = removeDuplicates(nums);

                expect(k).toStrictEqual(2);

                for (let i = 0; i < k; i++) {
                        expect(nums[i]).toStrictEqual(expectedNums[i]);
                }
        });

        test('basic test 2', () => {
                const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
                const expectedNums = [0, 1, 2, 3, 4];
                const k = removeDuplicates(nums);

                expect(k).toStrictEqual(5);

                for (let i = 0; i < k; i++) {
                        expect(nums[i]).toStrictEqual(expectedNums[i]);
                }
        });

        test('basic test 3', () => {
                const nums = [0];
                const expectedNums = [0];
                const k = removeDuplicates(nums);

                expect(k).toStrictEqual(1);

                for (let i = 0; i < k; i++) {
                        expect(nums[i]).toStrictEqual(expectedNums[i]);
                }
        });
});
