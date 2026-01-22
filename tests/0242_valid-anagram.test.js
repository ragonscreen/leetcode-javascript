import { describe, expect, test } from 'vitest';
import { isAnagram } from '../src/problems/solved/0242_valid-anagram.js';

describe('isAnagram', () => {
        test('returns true for anagrams', () => {
                expect(isAnagram('anagram', 'nagaram')).toBe(true);
        });

        test('returns false for non anagrams', () => {
                expect(isAnagram('rat', 'car')).toBe(false);
        });
});
