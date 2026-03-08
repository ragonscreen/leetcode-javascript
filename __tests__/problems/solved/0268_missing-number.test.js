import { describe, expect, test } from 'bun:test';
import {
        missingNumber,
        missingNumber1,
        missingNumber2,
        missingNumber3,
} from '../../../src/problems/solved/0268_missing-number.js';

describe('missingNumber', () => {
        describe('missingNumber', () => {
                test('basic test 1', () => {
                        expect(missingNumber([3, 0, 1])).toStrictEqual(2);
                });

                test('basic test 2', () => {
                        expect(missingNumber([0, 1])).toStrictEqual(2);
                });

                test('basic test 3', () => {
                        expect(
                                missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]),
                        ).toStrictEqual(8);
                });
        });

        describe('missingNumber1', () => {
                test('basic test 1', () => {
                        expect(missingNumber1([3, 0, 1])).toStrictEqual(2);
                });

                test('basic test 2', () => {
                        expect(missingNumber1([0, 1])).toStrictEqual(2);
                });

                test('basic test 3', () => {
                        expect(
                                missingNumber1([9, 6, 4, 2, 3, 5, 7, 0, 1]),
                        ).toStrictEqual(8);
                });
        });

        describe('missingNumber2', () => {
                test('basic test 1', () => {
                        expect(missingNumber2([3, 0, 1])).toStrictEqual(2);
                });

                test('basic test 2', () => {
                        expect(missingNumber2([0, 1])).toStrictEqual(2);
                });

                test('basic test 3', () => {
                        expect(
                                missingNumber2([9, 6, 4, 2, 3, 5, 7, 0, 1]),
                        ).toStrictEqual(8);
                });
        });

        describe('missingNumber3', () => {
                test('basic test 1', () => {
                        expect(missingNumber3([3, 0, 1])).toStrictEqual(2);
                });

                test('basic test 2', () => {
                        expect(missingNumber3([0, 1])).toStrictEqual(2);
                });

                test('basic test 3', () => {
                        expect(
                                missingNumber3([9, 6, 4, 2, 3, 5, 7, 0, 1]),
                        ).toStrictEqual(8);
                });
        });
});
