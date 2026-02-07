import { describe, expect, test } from 'bun:test';
import { reverseString } from '../../../src/problems/solved/0344_reverse-string.js';

describe('reverseString', () => {
        test('basic test 1', () => {
                expect(reverseString(['h', 'e', 'l', 'l', 'o'])).toStrictEqual([
                        'o',
                        'l',
                        'l',
                        'e',
                        'h',
                ]);
        });

        test('basic test 2', () => {
                expect(
                        reverseString(['H', 'a', 'n', 'n', 'a', 'h']),
                ).toStrictEqual(['h', 'a', 'n', 'n', 'a', 'H']);
        });
});
