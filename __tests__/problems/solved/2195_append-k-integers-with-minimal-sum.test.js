// biome-ignore-all lint/complexity/noExcessiveLinesPerFunction: multiple tests in one describe function

import { describe, expect, test } from 'bun:test';
import {
        minimalKSum,
        minimalKSum1,
        minimalKSum2,
        minimalKSum3,
} from '../../../src/problems/solved/2195_append-k-integers-with-minimal-sum.js';

describe('minimalKSum', () => {
        describe('minimalKSum', () => {
                test('basic test 1', () => {
                        expect(
                                minimalKSum([1, 4, 25, 10, 25], 2),
                        ).toStrictEqual(5);
                });

                test('basic test 2', () => {
                        expect(minimalKSum([5, 6], 6)).toStrictEqual(25);
                });

                test('basic test 3', () => {
                        expect(
                                minimalKSum(
                                        [
                                                96, 44, 99, 25, 61, 84, 88, 18,
                                                19, 33, 60, 86, 52, 19, 32, 47,
                                                35, 50, 94, 17, 29, 98, 22, 21,
                                                72, 100, 40, 84,
                                        ],
                                        35,
                                ),
                        ).toStrictEqual(794);
                });

                test('basic test 4', () => {
                        expect(
                                minimalKSum([1_000_000_000], 100_000_000),
                        ).toStrictEqual(5_000_000_050_000_000);
                });

                test('basic test 5', () => {
                        expect(
                                minimalKSum(
                                        [
                                                53, 41, 90, 33, 84, 26, 50, 32,
                                                63, 47, 66, 43, 29, 88, 71, 28,
                                                83,
                                        ],
                                        76,
                                ),
                        ).toStrictEqual(3444);
                });
        });

        describe.skip('minimalKSum1', () => {
                test('basic test 1', () => {
                        expect(
                                minimalKSum1([1, 4, 25, 10, 25], 2),
                        ).toStrictEqual(5);
                });

                test('basic test 2', () => {
                        expect(minimalKSum1([5, 6], 6)).toStrictEqual(25);
                });

                test('basic test 3', () => {
                        expect(
                                minimalKSum1(
                                        [
                                                96, 44, 99, 25, 61, 84, 88, 18,
                                                19, 33, 60, 86, 52, 19, 32, 47,
                                                35, 50, 94, 17, 29, 98, 22, 21,
                                                72, 100, 40, 84,
                                        ],
                                        35,
                                ),
                        ).toStrictEqual(794);
                });

                test('basic test 4', () => {
                        expect(
                                minimalKSum1([1_000_000_000], 100_000_000),
                        ).toStrictEqual(5_000_000_050_000_000);
                });

                test('basic test 5', () => {
                        expect(
                                minimalKSum1(
                                        [
                                                53, 41, 90, 33, 84, 26, 50, 32,
                                                63, 47, 66, 43, 29, 88, 71, 28,
                                                83,
                                        ],
                                        76,
                                ),
                        ).toStrictEqual(3444);
                });
        });

        describe.skip('minimalKSum2', () => {
                test('basic test 1', () => {
                        expect(
                                minimalKSum2([1, 4, 25, 10, 25], 2),
                        ).toStrictEqual(5);
                });

                test('basic test 2', () => {
                        expect(minimalKSum2([5, 6], 6)).toStrictEqual(25);
                });

                test('basic test 3', () => {
                        expect(
                                minimalKSum2(
                                        [
                                                96, 44, 99, 25, 61, 84, 88, 18,
                                                19, 33, 60, 86, 52, 19, 32, 47,
                                                35, 50, 94, 17, 29, 98, 22, 21,
                                                72, 100, 40, 84,
                                        ],
                                        35,
                                ),
                        ).toStrictEqual(794);
                });

                test('basic test 4', () => {
                        expect(
                                minimalKSum2([1_000_000_000], 100_000_000),
                        ).toStrictEqual(5_000_000_050_000_000);
                });

                test('basic test 5', () => {
                        expect(
                                minimalKSum2(
                                        [
                                                53, 41, 90, 33, 84, 26, 50, 32,
                                                63, 47, 66, 43, 29, 88, 71, 28,
                                                83,
                                        ],
                                        76,
                                ),
                        ).toStrictEqual(3444);
                });
        });

        describe.skip('minimalKSum3', () => {
                test('basic test 1', () => {
                        expect(
                                minimalKSum3([1, 4, 25, 10, 25], 2),
                        ).toStrictEqual(5);
                });

                test('basic test 2', () => {
                        expect(minimalKSum3([5, 6], 6)).toStrictEqual(25);
                });

                test('basic test 3', () => {
                        expect(
                                minimalKSum3(
                                        [
                                                96, 44, 99, 25, 61, 84, 88, 18,
                                                19, 33, 60, 86, 52, 19, 32, 47,
                                                35, 50, 94, 17, 29, 98, 22, 21,
                                                72, 100, 40, 84,
                                        ],
                                        35,
                                ),
                        ).toStrictEqual(794);
                });

                test('basic test 4', () => {
                        expect(
                                minimalKSum3([1_000_000_000], 100_000_000),
                        ).toStrictEqual(5_000_000_050_000_000);
                });

                test('basic test 5', () => {
                        expect(
                                minimalKSum3(
                                        [
                                                53, 41, 90, 33, 84, 26, 50, 32,
                                                63, 47, 66, 43, 29, 88, 71, 28,
                                                83,
                                        ],
                                        76,
                                ),
                        ).toStrictEqual(3444);
                });
        });
});
