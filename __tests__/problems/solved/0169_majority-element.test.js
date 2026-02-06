import { describe, expect, test } from 'vitest';
import {
        majorityElement,
        majorityElement1,
        majorityElement2,
} from '../../../src/problems/solved/0169_majority-element.js';

describe('majorityElement', () => {
        describe('majorityElement', () => {
                test('basic test 1', () => {
                        expect(majorityElement([3, 2, 3])).toStrictEqual(3);
                });

                test('basic test 2', () => {
                        expect(
                                majorityElement([2, 2, 1, 1, 1, 2, 2]),
                        ).toStrictEqual(2);
                });
        });

        describe('majorityElement1', () => {
                test('basic test 1', () => {
                        expect(majorityElement1([3, 2, 3])).toStrictEqual(3);
                });

                test('basic test 2', () => {
                        expect(
                                majorityElement1([2, 2, 1, 1, 1, 2, 2]),
                        ).toStrictEqual(2);
                });
        });

        describe('majorityElement2', () => {
                test('basic test 1', () => {
                        expect(majorityElement2([3, 2, 3])).toStrictEqual(3);
                });

                test('basic test 2', () => {
                        expect(
                                majorityElement2([2, 2, 1, 1, 1, 2, 2]),
                        ).toStrictEqual(2);
                });
        });
});
