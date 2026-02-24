import { describe, expect, test } from 'bun:test';
import { containsNearbyDuplicate } from '../../../src/problems/solved/0219_contains-duplicate-ii.js';

describe('containsNearbyDuplicate', () => {
        test('basic test 1', () => {
                expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toStrictEqual(
                        true,
                );
        });

        test('basic test 2', () => {
                expect(containsNearbyDuplicate([1, 0, 1, 1], 1)).toStrictEqual(
                        true,
                );
        });

        test('basic test 3', () => {
                expect(
                        containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2),
                ).toStrictEqual(false);
        });
});
