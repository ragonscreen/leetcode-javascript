import { describe, expect, test } from 'bun:test';
import { minSubArrayLen } from '../../../src/problems/wip/0209_minimum-size-subarray-sum.js';

describe('minSubArrayLen', () => {
        test('basic test 1', () => {
                expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toStrictEqual(2);
        });

        test('basic test 2', () => {
                expect(minSubArrayLen(4, [1, 4, 4])).toStrictEqual(1);
        });

        test('basic test 3', () => {
                expect(
                        minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]),
                ).toStrictEqual(0);
        });

        test('basic test 4', () => {
                expect(minSubArrayLen(7, [8])).toStrictEqual(1);
        });

        test('custom test 1', () => {
                expect(minSubArrayLen(4, [1, 1, 1])).toStrictEqual(0);
        });

        test('custom test 2', () => {
                expect(minSubArrayLen(7, [1, 1, 7])).toStrictEqual(1);
        });
});
