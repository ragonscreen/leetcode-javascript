import { describe, expect, test } from 'bun:test';
import { intToRoman } from '../../../src/problems/solved/0012_integer-to-roman.js';

describe('intToRoman', () => {
        test('basic test 1', () => {
                expect(intToRoman(3749)).toStrictEqual('MMMDCCXLIX');
        });

        test('basic test 2', () => {
                expect(intToRoman(58)).toStrictEqual('LVIII');
        });

        test('basic test 3', () => {
                expect(intToRoman(1994)).toStrictEqual('MCMXCIV');
        });
});
