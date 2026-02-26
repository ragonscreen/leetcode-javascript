import { describe, expect, test } from 'bun:test';
import {
        isHappy,
        isHappy1,
} from '../../../src/problems/solved/0202_happy-number.js';

describe('isHappy', () => {
        describe('isHappy', () => {
                test('basic test 1', () => {
                        expect(isHappy(19)).toStrictEqual(true);
                });

                test('basic test 2', () => {
                        expect(isHappy(2)).toStrictEqual(false);
                });

                test('basic test 3', () => {
                        expect(isHappy(1)).toStrictEqual(true);
                });

                test('basic test 4', () => {
                        expect(isHappy(10)).toStrictEqual(true);
                });

                test('basic test 5', () => {
                        expect(isHappy(100)).toStrictEqual(true);
                });

                test('basic test 6', () => {
                        expect(isHappy(1000)).toStrictEqual(true);
                });
        });

        describe('isHappy1', () => {
                test('basic test 1', () => {
                        expect(isHappy1(19)).toStrictEqual(true);
                });

                test('basic test 2', () => {
                        expect(isHappy1(2)).toStrictEqual(false);
                });

                test('basic test 3', () => {
                        expect(isHappy1(1)).toStrictEqual(true);
                });

                test('basic test 4', () => {
                        expect(isHappy1(10)).toStrictEqual(true);
                });

                test('basic test 5', () => {
                        expect(isHappy1(100)).toStrictEqual(true);
                });

                test('basic test 6', () => {
                        expect(isHappy1(1000)).toStrictEqual(true);
                });
        });
});
