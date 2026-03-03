import { describe, expect, test } from 'bun:test';
import { validPalindrome } from '../../../src/problems/solved/0680_valid-palindrome-ii.js';

describe('validPalindrome', () => {
        test('basic test 1', () => {
                expect(validPalindrome('aba')).toStrictEqual(true);
        });

        test('basic test 2', () => {
                expect(validPalindrome('abca')).toStrictEqual(true);
        });

        test('basic test 3', () => {
                expect(validPalindrome('abc')).toStrictEqual(false);
        });

        test('basic test 4', () => {
                expect(
                        validPalindrome(
                                'aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga',
                        ),
                ).toStrictEqual(true);
        });

        test('custom test 1', () => {
                expect(validPalindrome('bccc')).toStrictEqual(true);
        });

        test('custom test 2', () => {
                expect(validPalindrome('cccb')).toStrictEqual(true);
        });

        test('custom test 3', () => {
                expect(validPalindrome('axboocya')).toStrictEqual(false);
        });

        test('custom test 4', () => {
                expect(validPalindrome('lacapaxapacl')).toStrictEqual(true);
        });
});
