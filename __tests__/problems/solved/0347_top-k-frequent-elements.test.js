import { describe, expect, test } from 'bun:test';
import { topKFrequent } from '../../../src/problems/solved/0347_top-k-frequent-elements.js';
import { arrSortNum } from '../../utils/arrays.js';

describe('topKFrequent', () => {
        test('returns most frequent elements', () => {
                const received = topKFrequent([1, 1, 1, 2, 2, 3], 2);
                const expected = [1, 2];

                expect(arrSortNum(received)).toStrictEqual(
                        arrSortNum(expected),
                );
        });

        test('handles arrays with a single element', () => {
                const received = topKFrequent([1], 1);
                const expected = [1];

                expect(arrSortNum(received)).toStrictEqual(
                        arrSortNum(expected),
                );
        });

        test('returns most frequent elements with equal frequency', () => {
                const received = topKFrequent(
                        [1, 2, 1, 2, 1, 2, 3, 1, 3, 2],
                        2,
                );
                const expected = [1, 2];

                expect(arrSortNum(received)).toStrictEqual(
                        arrSortNum(expected),
                );
        });
});
