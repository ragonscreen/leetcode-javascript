import { describe, expect, test } from 'bun:test';
import {
        majorityElement,
        majorityElement1,
} from '../../../src/problems/solved/0229_majority-element-ii.js';

describe('majorityElement', () => {
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
        });

        describe('majorityElement1', () => {
                test('basic test 1', () => {
                        expect(majorityElement1([3, 2, 3])).toStrictEqual([3]);
                });

                test('basic test 2', () => {
                        expect(majorityElement1([1])).toStrictEqual([1]);
                });

                test('basic test 3', () => {
                        expect(majorityElement1([1, 2])).toStrictEqual([1, 2]);
                });
        });
});
