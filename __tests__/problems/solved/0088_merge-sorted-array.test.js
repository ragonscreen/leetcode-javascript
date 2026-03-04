import { describe, expect, test } from 'bun:test';
import { merge } from '../../../src/problems/solved/0088_merge-sorted-array.js';

describe('merge', () => {
        test('basic test 1', () => {
                const nums1 = [1, 2, 3, 0, 0, 0];
                const expected = [1, 2, 2, 3, 5, 6];

                expect(merge(nums1, 3, [2, 5, 6], 3)).toBeUndefined();

                for (let i = 0; i < expected.length; i++) {
                        expect(nums1[i]).toStrictEqual(expected[i]);
                }
        });

        test('basic test 2', () => {
                const nums1 = [1];
                const expected = [1];

                expect(merge(nums1, 1, [], 0)).toBeUndefined();

                for (let i = 0; i < expected.length; i++) {
                        expect(nums1[i]).toStrictEqual(expected[i]);
                }
        });

        test('basic test 3', () => {
                const nums1 = [0];
                const expected = [1];

                expect(merge(nums1, 0, [1], 1)).toBeUndefined();

                for (let i = 0; i < expected.length; i++) {
                        expect(nums1[i]).toStrictEqual(expected[i]);
                }
        });

        test('basic test 4', () => {
                const nums1 = [1, 2, 3, 0, 0, 0];
                const expected = [1, 2, 3, 4, 5, 6];

                expect(merge(nums1, 3, [4, 5, 6], 3)).toBeUndefined();

                for (let i = 0; i < expected.length; i++) {
                        expect(nums1[i]).toStrictEqual(expected[i]);
                }
        });

        test('custom test 1', () => {
                const nums1 = [1, 0];
                const expected = [0, 1];

                expect(merge(nums1, 1, [0], 1)).toBeUndefined();

                for (let i = 0; i < expected.length; i++) {
                        expect(nums1[i]).toStrictEqual(expected[i]);
                }
        });
});
