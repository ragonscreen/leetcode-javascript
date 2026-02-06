// biome-ignore-all lint/complexity/noExcessiveLinesPerFunction: multiple tests in one describe function

import { describe, expect, test } from 'vitest';
import { threeSum } from '../../../src/problems/solved/0015_3sum.js';
import { arrDeepSortNum } from '../../utils/arrays.js';

describe('threeSum', () => {
        test('basic test 1', () => {
                expect(
                        arrDeepSortNum(threeSum([-1, 0, 1, 2, -1, -4])),
                ).toStrictEqual(
                        arrDeepSortNum([
                                [-1, -1, 2],
                                [-1, 0, 1],
                        ]),
                );
        });

        test('basic test 2', () => {
                expect(arrDeepSortNum(threeSum([0, 1, 1]))).toStrictEqual(
                        arrDeepSortNum([]),
                );
        });

        test('basic test 3', () => {
                expect(arrDeepSortNum(threeSum([0, 0, 0]))).toStrictEqual(
                        arrDeepSortNum([[0, 0, 0]]),
                );
        });

        test('basic test 4', () => {
                expect(arrDeepSortNum(threeSum([0, 0, 0, 0]))).toStrictEqual(
                        arrDeepSortNum([[0, 0, 0]]),
                );
        });

        test('basic test 5', () => {
                expect(
                        arrDeepSortNum(threeSum([-2, 0, 1, 1, 2])),
                ).toStrictEqual(
                        arrDeepSortNum([
                                [-2, 0, 2],
                                [-2, 1, 1],
                        ]),
                );
        });

        test('basic test 6', () => {
                expect(
                        arrDeepSortNum(
                                threeSum([
                                        2, -3, 0, -2, -5, -5, -4, 1, 2, -2, 2,
                                        0, 2, -4, 5, 5, -10,
                                ]),
                        ),
                ).toStrictEqual(
                        arrDeepSortNum([
                                [-10, 5, 5],
                                [-5, 0, 5],
                                [-4, 2, 2],
                                [-3, -2, 5],
                                [-3, 1, 2],
                                [-2, 0, 2],
                        ]),
                );
        });
});
