// biome-ignore-all lint/complexity/noExcessiveLinesPerFunction: multiple tests in one describe function

import { describe, expect, test } from 'bun:test';
import {
        survivedRobotsHealths,
        survivedRobotsHealths1,
} from '../../../src/problems/solved/2751_robot-collisions.js';

describe('survivedRobotsHealths', () => {
        describe('survivedRobotsHealths', () => {
                test('basic test 1', () => {
                        expect(
                                survivedRobotsHealths(
                                        [5, 4, 3, 2, 1],
                                        [2, 17, 9, 15, 10],
                                        'RRRRR',
                                ),
                        ).toStrictEqual([2, 17, 9, 15, 10]);
                });

                test('basic test 2', () => {
                        expect(
                                survivedRobotsHealths(
                                        [3, 5, 2, 6],
                                        [10, 10, 15, 12],
                                        'RLRL',
                                ),
                        ).toStrictEqual([14]);
                });

                test('basic test 3', () => {
                        expect(
                                survivedRobotsHealths(
                                        [1, 2, 5, 6],
                                        [10, 10, 11, 11],
                                        'RLRL',
                                ),
                        ).toStrictEqual([]);
                });

                test('basic test 4', () => {
                        expect(
                                survivedRobotsHealths(
                                        [1, 2, 3],
                                        [2, 1, 1],
                                        'RLL',
                                ),
                        ).toStrictEqual([]);
                });

                test('basic test 5', () => {
                        expect(
                                survivedRobotsHealths(
                                        [1_000_000_000],
                                        [1_000_000_000],
                                        'R',
                                ),
                        ).toStrictEqual([1_000_000_000]);
                });

                test('basic test 6', () => {
                        expect(
                                survivedRobotsHealths([1, 40], [10, 11], 'RL'),
                        ).toStrictEqual([10]);
                });
        });

        describe('survivedRobotsHealths1', () => {
                test('basic test 1', () => {
                        expect(
                                survivedRobotsHealths1(
                                        [5, 4, 3, 2, 1],
                                        [2, 17, 9, 15, 10],
                                        'RRRRR',
                                ),
                        ).toStrictEqual([2, 17, 9, 15, 10]);
                });

                test('basic test 2', () => {
                        expect(
                                survivedRobotsHealths1(
                                        [3, 5, 2, 6],
                                        [10, 10, 15, 12],
                                        'RLRL',
                                ),
                        ).toStrictEqual([14]);
                });

                test('basic test 3', () => {
                        expect(
                                survivedRobotsHealths1(
                                        [1, 2, 5, 6],
                                        [10, 10, 11, 11],
                                        'RLRL',
                                ),
                        ).toStrictEqual([]);
                });

                test('basic test 4', () => {
                        expect(
                                survivedRobotsHealths1(
                                        [1, 2, 3],
                                        [2, 1, 1],
                                        'RLL',
                                ),
                        ).toStrictEqual([]);
                });

                test('basic test 5', () => {
                        expect(
                                survivedRobotsHealths1(
                                        [1_000_000_000],
                                        [1_000_000_000],
                                        'R',
                                ),
                        ).toStrictEqual([1_000_000_000]);
                });

                test('basic test 6', () => {
                        expect(
                                survivedRobotsHealths1([1, 40], [10, 11], 'RL'),
                        ).toStrictEqual([10]);
                });
        });
});
