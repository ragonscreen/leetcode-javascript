import { describe, expect, test } from 'vitest';
import { isTrionic } from '../src/problems/solved/3637_trionic-array-i.js';

describe('isTrionic', () => {
        test('basic test 1', () => {
                expect(isTrionic([1, 3, 5, 4, 2, 6])).toStrictEqual(true);
        });

        test('basic test 2', () => {
                expect(isTrionic([2, 1, 3])).toStrictEqual(false);
        });

        test('custom test 1', () => {
                expect(isTrionic([1, 2, 3])).toStrictEqual(false);
        });

        test('custom test 2', () => {
                expect(isTrionic([1, 2, 3, 2, 3])).toStrictEqual(true);
        });

        test('custom test 3', () => {
                expect(isTrionic([1, 2, 3, 2, 3, 2])).toStrictEqual(false);
        });
});
