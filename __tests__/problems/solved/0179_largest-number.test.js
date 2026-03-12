import { describe, expect, test } from 'bun:test';
import {
        largestNumber,
        largestNumber1,
} from '../../../src/problems/solved/0179_largest-number.js';

describe('largestNumber', () => {
        describe('largestNumber', () => {
                test('basic test 1', () => {
                        expect(largestNumber([3, 30, 34, 5, 9])).toStrictEqual(
                                '9534330',
                        );
                });

                test('basic test 2', () => {
                        expect(largestNumber([10, 2])).toStrictEqual('210');
                });

                test('basic test 3', () => {
                        expect(largestNumber([0, 0])).toStrictEqual('0');
                });

                test('custom test 1', () => {
                        expect(largestNumber([3, 4, 1, 2])).toStrictEqual(
                                '4321',
                        );
                });

                test('custom test 2', () => {
                        expect(largestNumber([888, 88])).toStrictEqual('88888');
                });

                test('custom test 3', () => {
                        expect(largestNumber([0, 0, 0, 0])).toStrictEqual('0');
                });
        });

        describe('largestNumber1', () => {
                test('basic test 1', () => {
                        expect(largestNumber1([3, 30, 34, 5, 9])).toStrictEqual(
                                '9534330',
                        );
                });

                test('basic test 2', () => {
                        expect(largestNumber1([10, 2])).toStrictEqual('210');
                });

                test('basic test 3', () => {
                        expect(largestNumber1([0, 0])).toStrictEqual('0');
                });

                test('custom test 1', () => {
                        expect(largestNumber1([3, 4, 1, 2])).toStrictEqual(
                                '4321',
                        );
                });

                test('custom test 2', () => {
                        expect(largestNumber1([888, 88])).toStrictEqual(
                                '88888',
                        );
                });

                test('custom test 3', () => {
                        expect(largestNumber1([0, 0, 0, 0])).toStrictEqual('0');
                });
        });
});
