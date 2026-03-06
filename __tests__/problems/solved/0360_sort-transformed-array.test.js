import { describe, expect, test } from 'bun:test';
import {
        sortTransformedArray,
        sortTransformedArray1,
} from '../../../src/problems/solved/0360_sort-transformed-array.js';

describe('sortTransformedArray', () => {
        describe('sortTransformedArray', () => {
                test('basic test 1', () => {
                        expect(
                                sortTransformedArray([-4, -2, 2, 4], 1, 3, 5),
                        ).toStrictEqual([3, 9, 15, 33]);
                });

                test('basic test 2', () => {
                        expect(
                                sortTransformedArray([-4, -2, 2, 4], -1, 3, 5),
                        ).toStrictEqual([-23, -5, 1, 7]);
                });
        });

        describe('sortTransformedArray1', () => {
                test('basic test 1', () => {
                        expect(
                                sortTransformedArray1([-4, -2, 2, 4], 1, 3, 5),
                        ).toStrictEqual([3, 9, 15, 33]);
                });

                test('basic test 2', () => {
                        expect(
                                sortTransformedArray1([-4, -2, 2, 4], -1, 3, 5),
                        ).toStrictEqual([-23, -5, 1, 7]);
                });
        });
});
