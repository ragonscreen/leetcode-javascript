/** biome-ignore-all lint/complexity/noExcessiveLinesPerFunction: multiple tests in one describe function */

import { describe, expect, test } from 'bun:test';
import { merge } from '../../../src/problems/solved/0056_merge-intervals.js';

describe('merge', () => {
        test('basic test 1', () => {
                expect(
                        merge([
                                [1, 3],
                                [2, 6],
                                [8, 10],
                                [15, 18],
                        ]),
                ).toStrictEqual([
                        [1, 6],
                        [8, 10],
                        [15, 18],
                ]);
        });

        test('basic test 2', () => {
                expect(
                        merge([
                                [1, 4],
                                [4, 5],
                        ]),
                ).toStrictEqual([[1, 5]]);
        });

        test('basic test 3', () => {
                expect(
                        merge([
                                [4, 7],
                                [1, 4],
                        ]),
                ).toStrictEqual([[1, 7]]);
        });

        test('basic test 4', () => {
                expect(merge([[1, 3]])).toStrictEqual([[1, 3]]);
        });

        test('basic test 5', () => {
                expect(
                        merge([
                                [1, 4],
                                [2, 3],
                        ]),
                ).toStrictEqual([[1, 4]]);
        });

        test('basic test 6', () => {
                expect(
                        merge([
                                [1, 4],
                                [0, 0],
                        ]),
                ).toStrictEqual([
                        [0, 0],
                        [1, 4],
                ]);
        });

        test('basic test 7', () => {
                expect(
                        merge([
                                [1, 4],
                                [0, 2],
                                [3, 5],
                        ]),
                ).toStrictEqual([[0, 5]]);
        });

        test('basic test 8', () => {
                expect(
                        merge([
                                [1, 4],
                                [5, 6],
                        ]),
                ).toStrictEqual([
                        [1, 4],
                        [5, 6],
                ]);
        });
});
