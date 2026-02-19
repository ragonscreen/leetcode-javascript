// biome-ignore-all lint/complexity/noExcessiveLinesPerFunction: multiple tests in one describe function

import { describe, expect, test } from 'bun:test';
import {
        numRescueBoats,
        numRescueBoats1,
} from '../../../src/problems/solved/0881_boats-to-save-people.js';

describe('numRescueBoats', () => {
        describe('numRescueBoats', () => {
                test('basic test 1', () => {
                        expect(numRescueBoats([1, 2], 3)).toStrictEqual(1);
                });

                test('basic test 2', () => {
                        expect(numRescueBoats([3, 2, 2, 1], 3)).toStrictEqual(
                                3,
                        );
                });

                test('basic test 3', () => {
                        expect(numRescueBoats([3, 5, 3, 4], 5)).toStrictEqual(
                                4,
                        );
                });

                test('basic test 4', () => {
                        expect(
                                numRescueBoats([3, 2, 3, 2, 2], 6),
                        ).toStrictEqual(3);
                });

                test('custom test 1', () => {
                        expect(
                                numRescueBoats([5, 5, 5, 5, 5], 5),
                        ).toStrictEqual(5);
                });

                test('custom test 2', () => {
                        expect(
                                numRescueBoats([5, 5, 5, 5, 5], 6),
                        ).toStrictEqual(5);
                });
        });

        describe('numRescueBoats1', () => {
                test('basic test 1', () => {
                        expect(numRescueBoats1([1, 2], 3)).toStrictEqual(1);
                });

                test('basic test 2', () => {
                        expect(numRescueBoats1([3, 2, 2, 1], 3)).toStrictEqual(
                                3,
                        );
                });

                test('basic test 3', () => {
                        expect(numRescueBoats1([3, 5, 3, 4], 5)).toStrictEqual(
                                4,
                        );
                });

                test('basic test 4', () => {
                        expect(
                                numRescueBoats1([3, 2, 3, 2, 2], 6),
                        ).toStrictEqual(3);
                });

                test('custom test 1', () => {
                        expect(
                                numRescueBoats1([5, 5, 5, 5, 5], 5),
                        ).toStrictEqual(5);
                });

                test('custom test 2', () => {
                        expect(
                                numRescueBoats1([5, 5, 5, 5, 5], 6),
                        ).toStrictEqual(5);
                });
        });
});
