import { describe, expect, test } from 'bun:test';
import {
        subarraySum,
        subarraySum1,
} from '../../../src/problems/solved/0560_subarray-sum-equals-k.js';

describe('subarraySum', () => {
        describe('subarraySum', () => {
                test('basic test 1', () => {
                        expect(subarraySum([1, 1, 1], 2)).toStrictEqual(2);
                });

                test('basic test 2', () => {
                        expect(subarraySum([1, 2, 3], 3)).toStrictEqual(2);
                });

                test('basic test 3', () => {
                        expect(subarraySum([1, -1, 0], 0)).toStrictEqual(3);
                });

                test('basic test 4', () => {
                        expect(
                                subarraySum([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0),
                        ).toStrictEqual(55);
                });
        });

        describe('subarraySum1', () => {
                test('basic test 1', () => {
                        expect(subarraySum1([1, 1, 1], 2)).toStrictEqual(2);
                });

                test('basic test 2', () => {
                        expect(subarraySum1([1, 2, 3], 3)).toStrictEqual(2);
                });

                test('basic test 3', () => {
                        expect(subarraySum1([1, -1, 0], 0)).toStrictEqual(3);
                });

                test('basic test 4', () => {
                        expect(
                                subarraySum1([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0),
                        ).toStrictEqual(55);
                });
        });
});
