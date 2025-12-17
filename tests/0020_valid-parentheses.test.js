import { describe, expect, test } from 'vitest';
import isValid from '../src/problems/solved/0020_valid-parentheses.js';

describe('isValid', () => {
        test('returns true for valid parentheses', () => {
                expect(isValid('()')).toBe(true);
        });

        test('handles multiple parentheses', () => {
                expect(isValid('()[]{}')).toBe(true);
        });

        test('returns false for invalid parentheses', () => {
                expect(isValid('(]')).toBe(false);
        });

        test('handles nested parentheses', () => {
                expect(isValid('([])')).toBe(true);
        });

        test('handles invalid nested parentheses', () => {
                expect(isValid('([)]')).toBe(false);
        });
});
