import { describe, expect, test } from 'vitest';
import { lengthOfLongestSubstring } from '../src/problems/solved/0003_longest-substring-without-repeating-characters.js';

describe('lengthOfLongestSubstring', () => {
        test('basic test 1', () => {
                expect(lengthOfLongestSubstring('abcabcbb')).toStrictEqual(3);
        });

        test('basic test 2', () => {
                expect(lengthOfLongestSubstring('bbbbb')).toStrictEqual(1);
        });

        test('basic test 3', () => {
                expect(lengthOfLongestSubstring('pwwkew')).toStrictEqual(3);
        });

        test('basic test 4', () => {
                expect(lengthOfLongestSubstring(' ')).toStrictEqual(1);
        });
});
