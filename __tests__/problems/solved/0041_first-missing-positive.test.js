import { describe, expect, test } from 'bun:test';
import { firstMissingPositive } from '../../../src/problems/solved/0041_first-missing-positive.js';

describe('firstMissingPositive', () => {
        test('basic test 1', () => {
                expect(firstMissingPositive([1, 2, 0])).toStrictEqual(3);
        });

        test('basic test 2', () => {
                expect(firstMissingPositive([3, 4, -1, 1])).toStrictEqual(2);
        });

        test('basic test 3', () => {
                expect(firstMissingPositive([7, 8, 9, 11, 12])).toStrictEqual(
                        1,
                );
        });

        test('basic test 4', () => {
                expect(firstMissingPositive([1])).toStrictEqual(2);
        });

        test('basic test 5', () => {
                expect(firstMissingPositive([0, 1, 2])).toStrictEqual(3);
        });

        test('basic test 6', () => {
                expect(firstMissingPositive([2, 1])).toStrictEqual(3);
        });

        test('basic test 7', () => {
                expect(firstMissingPositive([-5])).toStrictEqual(1);
        });
});
