import { describe, expect, test } from 'vitest';
import isPalindrome from '../src/problems/solved/0125_valid-palindrome.js';

describe('isPalindrome', () => {
        test('basic test 1', () => {
                expect(
                        isPalindrome('A man, a plan, a canal: Panama'),
                ).toStrictEqual(true);
        });

        test('basic test 2', () => {
                expect(isPalindrome('race a car')).toStrictEqual(false);
        });

        test('basic test 3', () => {
                expect(isPalindrome(' ')).toStrictEqual(true);
        });
});
