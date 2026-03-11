import { describe, expect, test } from 'bun:test';
import {
        rotate,
        rotate1,
        rotate2,
} from '../../../src/problems/solved/0189_rotate-array.js';

describe('rotate', () => {
        describe('rotate', () => {
                test('basic test 1', () => {
                        const nums = [1, 2, 3, 4, 5, 6, 7];
                        const expected = [5, 6, 7, 1, 2, 3, 4];

                        expect(rotate(nums, 3)).toBeNil();
                        expect(nums).toStrictEqual(expected);
                });

                test('basic test 2', () => {
                        const nums = [-1, -100, 3, 99];
                        const expected = [3, 99, -1, -100];

                        expect(rotate(nums, 2)).toBeNil();
                        expect(nums).toStrictEqual(expected);
                });
        });

        describe('rotate1', () => {
                test('basic test 1', () => {
                        const nums = [1, 2, 3, 4, 5, 6, 7];
                        const expected = [5, 6, 7, 1, 2, 3, 4];

                        expect(rotate1(nums, 3)).toBeNil();
                        expect(nums).toStrictEqual(expected);
                });

                test('basic test 2', () => {
                        const nums = [-1, -100, 3, 99];
                        const expected = [3, 99, -1, -100];

                        expect(rotate1(nums, 2)).toBeNil();
                        expect(nums).toStrictEqual(expected);
                });
        });

        describe('rotate2', () => {
                test('basic test 1', () => {
                        const nums = [1, 2, 3, 4, 5, 6, 7];
                        const expected = [5, 6, 7, 1, 2, 3, 4];

                        expect(rotate2(nums, 3)).toBeNil();
                        expect(nums).toStrictEqual(expected);
                });

                test('basic test 2', () => {
                        const nums = [-1, -100, 3, 99];
                        const expected = [3, 99, -1, -100];

                        expect(rotate2(nums, 2)).toBeNil();
                        expect(nums).toStrictEqual(expected);
                });
        });
});
