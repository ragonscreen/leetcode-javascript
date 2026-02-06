import { describe, expect, test } from 'vitest';
import { maxArea } from '../../../src/problems/solved/0011_container-with-most-water.js';

describe('maxArea', () => {
        test('basic test 1', () => {
                expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toStrictEqual(49);
        });

        test('basic test 2', () => {
                expect(maxArea([1, 1])).toStrictEqual(1);
        });
});
