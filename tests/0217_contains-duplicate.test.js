import { describe, expect, test } from 'vitest';
import { containsDuplicate } from '../src/problems/solved/0217_contains-duplicate.js';

describe('containsDuplicate', () => {
        test('returns true when duplicate exists', () => {
                expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
        });

        test('returns false when duplicate does not exist', () => {
                expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
        });

        test('returns true when multiple duplicates exist', () => {
                expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(
                        true,
                );
        });
});
