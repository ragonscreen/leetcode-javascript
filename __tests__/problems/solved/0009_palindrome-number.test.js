import { describe, expect, test } from 'bun:test';
import {
        isPalindrome,
        isPalindrome1,
        isPalindrome2,
} from '../../../src/problems/solved/0009_palindrome-number.js';

describe('isPalindrome', () => {
        describe('isPalindrome', () => {
                test('basic test 1', () => {
                        expect(isPalindrome(121)).toStrictEqual(true);
                });

                test('basic test 2', () => {
                        expect(isPalindrome(-121)).toStrictEqual(false);
                });

                test('basic test 3', () => {
                        expect(isPalindrome(10)).toStrictEqual(false);
                });
        });

        describe('isPalindrome1', () => {
                test('basic test 1', () => {
                        expect(isPalindrome1(121)).toStrictEqual(true);
                });

                test('basic test 2', () => {
                        expect(isPalindrome1(-121)).toStrictEqual(false);
                });

                test('basic test 3', () => {
                        expect(isPalindrome1(10)).toStrictEqual(false);
                });
        });

        describe('isPalindrome2', () => {
                test('basic test 1', () => {
                        expect(isPalindrome2(121)).toStrictEqual(true);
                });

                test('basic test 2', () => {
                        expect(isPalindrome2(-121)).toStrictEqual(false);
                });

                test('basic test 3', () => {
                        expect(isPalindrome2(10)).toStrictEqual(false);
                });
        });
});
