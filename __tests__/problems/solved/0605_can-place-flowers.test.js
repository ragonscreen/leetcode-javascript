import { describe, expect, test } from 'bun:test';
import { canPlaceFlowers } from '../../../src/problems/solved/0605_can-place-flowers.js';

describe('canPlaceFlowers', () => {
        test('basic test 1', () => {
                expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toStrictEqual(true);
        });

        test('basic test 2', () => {
                expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toStrictEqual(
                        false,
                );
        });

        test('custom test 1', () => {
                expect(canPlaceFlowers([0, 0, 1, 0, 1], 1)).toStrictEqual(true);
        });

        test('custom test 2', () => {
                expect(canPlaceFlowers([1, 0, 1, 0, 0], 1)).toStrictEqual(true);
        });
});
