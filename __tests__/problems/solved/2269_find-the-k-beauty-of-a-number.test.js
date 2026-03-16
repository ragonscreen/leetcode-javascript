import { describe, expect, test } from 'bun:test';
import { divisorSubstrings } from '../../../src/problems/solved/2269_find-the-k-beauty-of-a-number.js';

describe('divisorSubstrings', () => {
        test('basic test 1', () => {
                expect(divisorSubstrings(240, 2)).toStrictEqual(2);
        });

        test('basic test 2', () => {
                expect(divisorSubstrings(430_043, 2)).toStrictEqual(2);
        });

        test('custom test 1', () => {
                expect(divisorSubstrings(1, 1)).toStrictEqual(1);
        });
});
