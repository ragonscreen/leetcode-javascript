import { describe, expect, test } from 'bun:test';
import { maxWidthRamp } from '../../../src/problems/solved/0962_maximum-width-ramp.js';

describe('maxWidthRamp', () => {
        test('basic test 1', () => {
                expect(maxWidthRamp([6, 0, 8, 2, 1, 5])).toStrictEqual(4);
        });

        test('basic test 2', () => {
                expect(
                        maxWidthRamp([9, 8, 1, 0, 1, 9, 4, 0, 4, 1]),
                ).toStrictEqual(7);
        });

        test('basic test 3', () => {
                expect(maxWidthRamp([3, 2, 4, 1])).toStrictEqual(2);
        });
});
