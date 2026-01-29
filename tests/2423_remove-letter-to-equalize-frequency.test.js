import { describe, expect, test } from 'vitest';
import { equalFrequency } from '../src/problems/solved/2423_remove-letter-to-equalize-frequency.js';

describe('equalFrequency', () => {
        test('basic test 1', () => {
                expect(equalFrequency('abcc')).toStrictEqual(true);
        });

        test('basic test 2', () => {
                expect(equalFrequency('zaza')).toStrictEqual(false);
        });

        test('basic test 3', () => {
                expect(equalFrequency('abbccc')).toStrictEqual(false);
        });

        test('basic test 4', () => {
                expect(equalFrequency('abcd')).toStrictEqual(true);
        });

        test('basic test 5', () => {
                expect(equalFrequency('bac')).toStrictEqual(true);
        });

        test('basic test 6', () => {
                expect(equalFrequency('abbcc')).toStrictEqual(true);
        });

        test('basic test 7', () => {
                expect(equalFrequency('aaabc')).toStrictEqual(false);
        });

        test('basic test 8', () => {
                expect(equalFrequency('aaaabbbbccddeeff')).toStrictEqual(false);
        });

        test('basic test 9', () => {
                expect(equalFrequency('aaabbbcccdd')).toStrictEqual(false);
        });

        test('basic test 10', () => {
                expect(equalFrequency('aaabbbcccd')).toStrictEqual(true);
        });

        test('basic test 11', () => {
                expect(equalFrequency('aa')).toStrictEqual(true);
        });

        test('basic test 12', () => {
                expect(equalFrequency('abccddeeff')).toStrictEqual(false);
        });

        test('basic test 13', () => {
                expect(equalFrequency('cccaa')).toStrictEqual(true);
        });

        test('basic test 14', () => {
                expect(equalFrequency('ccccaa')).toStrictEqual(false);
        });

        test('basic test 15', () => {
                expect(equalFrequency('cccaaddd')).toStrictEqual(false);
        });

        test('basic test 16', () => {
                expect(equalFrequency('bcaebda')).toStrictEqual(false);
        });

        test('basic test 17', () => {
                expect(equalFrequency('cccd')).toStrictEqual(true);
        });
});
