import { describe, expect, test } from 'bun:test';
import { largestRectangleArea } from '../../../src/problems/solved/0084_largest-rectangle-in-histogram.js';

describe('largestRectangleArea', () => {
        test('basic test 1', () => {
                expect(largestRectangleArea([2, 1, 5, 6, 2, 3])).toStrictEqual(
                        10,
                );
        });

        test('basic test 2', () => {
                expect(largestRectangleArea([2, 4])).toStrictEqual(4);
        });
});
