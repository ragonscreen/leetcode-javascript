import { describe, expect, test } from 'bun:test';
import { smallestBalancedIndex } from '../../../src/problems/solved/3862_find-the-smallest-balanced-index.js';

describe('smallestBalancedIndex', () => {
        test('basic test 1', () => {
                expect(smallestBalancedIndex([2, 1, 2])).toStrictEqual(1);
        });

        test('basic test 2', () => {
                expect(smallestBalancedIndex([2, 8, 2, 2, 5])).toStrictEqual(2);
        });

        test('basic test 3', () => {
                expect(smallestBalancedIndex([1])).toStrictEqual(-1);
        });

        test('basic test 4', () => {
                expect(
                        smallestBalancedIndex([
                                999, 818, 984, 995, 841, 822, 984, 978, 960,
                                997, 896, 926, 759, 961, 1000, 562, 1, 1, 1, 87,
                                4, 1, 40,
                        ]),
                ).toStrictEqual(15);
        });

        test('basic test 5', () => {
                expect(
                        smallestBalancedIndex([1, 1, 2, 500_000_004]),
                ).toStrictEqual(-1);
        });
});
