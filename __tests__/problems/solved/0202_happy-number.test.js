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
        });

        describe('isHappy1', () => {
                test('basic test 1', () => {
                        expect(isHappy1(19)).toStrictEqual(true);
                });

                test('basic test 2', () => {
                        expect(isHappy1(2)).toStrictEqual(false);
                });
        });
});
