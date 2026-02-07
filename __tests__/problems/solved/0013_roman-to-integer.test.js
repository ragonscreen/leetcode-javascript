import { describe, expect, test } from 'bun:test';
import {
        romanToInt,
        romanToInt1,
} from '../../../src/problems/solved/0013_roman-to-integer.js';

describe('romanToInt', () => {
        describe('romanToInt', () => {
                test('basic test 1', () => {
                        expect(romanToInt('III')).toStrictEqual(3);
                });

                test('basic test 2', () => {
                        expect(romanToInt('LVIII')).toStrictEqual(58);
                });

                test('basic test 3', () => {
                        expect(romanToInt('MCMXCIV')).toStrictEqual(1994);
                });
        });
        describe('romanToInt1', () => {
                test('basic test 1', () => {
                        expect(romanToInt1('III')).toStrictEqual(3);
                });

                test('basic test 2', () => {
                        expect(romanToInt1('LVIII')).toStrictEqual(58);
                });

                test('basic test 3', () => {
                        expect(romanToInt1('MCMXCIV')).toStrictEqual(1994);
                });
        });
});
