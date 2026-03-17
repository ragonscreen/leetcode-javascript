// biome-ignore-all lint/complexity/noExcessiveLinesPerFunction: multiple tests in one describe function

import { describe, expect, test } from 'bun:test';
import { subarraysWithKDistinct } from '../../../src/problems/solved/0992_subarrays-with-k-different-integers.js';

describe('subarraysWithKDistinct', () => {
        test('basic test 1', () => {
                expect(
                        subarraysWithKDistinct([1, 2, 1, 2, 3], 2),
                ).toStrictEqual(7);
        });

        test('basic test 2', () => {
                expect(
                        subarraysWithKDistinct([1, 2, 1, 3, 4], 3),
                ).toStrictEqual(3);
        });

        test('basic test 3', () => {
                expect(
                        subarraysWithKDistinct([5, 1, 4, 4, 5], 3),
                ).toStrictEqual(4);
        });

        test('custom test 1', () => {
                expect(
                        subarraysWithKDistinct([1, 2, 3, 2, 3, 1], 3),
                ).toStrictEqual(7);
        });
});
