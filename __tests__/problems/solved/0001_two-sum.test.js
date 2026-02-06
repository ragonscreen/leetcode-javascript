import { describe, expect, test } from 'vitest';
import { twoSum } from '../../../src/problems/solved/0001_two-sum.js';
import { arrSortNum } from '../../utils/arrays.js';

describe('twoSum', () => {
        test('returns answer when elements exist at the start', () => {
                const expected = [0, 1];
                const received = twoSum([2, 7, 11, 15], 9);

                expect(arrSortNum(received)).toStrictEqual(
                        arrSortNum(expected),
                );
        });

        test('returns answer when elements exist at the end', () => {
                const expected = [1, 2];
                const received = twoSum([3, 2, 4], 6);

                expect(arrSortNum(received)).toStrictEqual(
                        arrSortNum(expected),
                );
        });

        test('handles arrays with only two elements', () => {
                const expected = [0, 1];
                const received = twoSum([3, 3], 6);

                expect(arrSortNum(received)).toStrictEqual(
                        arrSortNum(expected),
                );
        });
});
