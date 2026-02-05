import { describe, expect, test } from 'vitest';
import { majorityElement } from '../src/problems/wip/0229_majority-element-ii.js';

describe('majorityElement', () => {
        test('basic test 1', () => {
                expect(majorityElement([3, 2, 3])).toStrictEqual([3]);
        });

        test('basic test 2', () => {
                expect(majorityElement([1])).toStrictEqual([1]);
        });

        test('basic test 3', () => {
                expect(majorityElement([1, 2])).toStrictEqual([1, 2]);
        });

        test('basic test 4', () => {
                expect(majorityElement([2, 2])).toStrictEqual([2]);
        });
});
