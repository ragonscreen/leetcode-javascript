import { describe, expect, test } from 'bun:test';
import { maxCount } from '../../../src/problems/solved/2554_maximum-number-of-integers-to-choose-from-a-range-i.js';

describe('maxCount', () => {
        test('basic test 1', () => {
                expect(maxCount([1, 6, 5], 5, 6)).toStrictEqual(2);
        });

        test('basic test 2', () => {
                expect(maxCount([1, 2, 3, 4, 5, 6, 7], 8, 1)).toStrictEqual(0);
        });

        test('basic test 3', () => {
                expect(maxCount([11], 7, 50)).toStrictEqual(7);
        });
});
