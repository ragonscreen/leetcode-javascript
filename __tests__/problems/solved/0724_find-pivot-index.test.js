import { describe, expect, test } from 'bun:test';
import {
        pivotIndex,
        pivotIndex1,
        pivotIndex2,
} from '../../../src/problems/solved/0724_find-pivot-index.js';

describe('pivotIndex', () => {
        describe('pivotIndex', () => {
                test('basic test 1', () => {
                        expect(pivotIndex([1, 7, 3, 6, 5, 6])).toStrictEqual(3);
                });

                test('basic test 2', () => {
                        expect(pivotIndex([1, 2, 3])).toStrictEqual(-1);
                });

                test('basic test 3', () => {
                        expect(pivotIndex([2, 1, -1])).toStrictEqual(0);
                });

                test('basic test 3', () => {
                        expect(pivotIndex([-1, -1, 0, 1, 1, 0])).toStrictEqual(
                                5,
                        );
                });
        });

        describe('pivotIndex1', () => {
                test('basic test 1', () => {
                        expect(pivotIndex1([1, 7, 3, 6, 5, 6])).toStrictEqual(
                                3,
                        );
                });

                test('basic test 2', () => {
                        expect(pivotIndex1([1, 2, 3])).toStrictEqual(-1);
                });

                test('basic test 3', () => {
                        expect(pivotIndex1([2, 1, -1])).toStrictEqual(0);
                });
        });

        describe('pivotIndex2', () => {
                test('basic test 1', () => {
                        expect(pivotIndex2([1, 7, 3, 6, 5, 6])).toStrictEqual(
                                3,
                        );
                });

                test('basic test 2', () => {
                        expect(pivotIndex2([1, 2, 3])).toStrictEqual(-1);
                });

                test('basic test 3', () => {
                        expect(pivotIndex2([2, 1, -1])).toStrictEqual(0);
                });
        });
});
