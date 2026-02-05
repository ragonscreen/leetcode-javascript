import { describe, expect, test } from 'vitest';
import { mostFrequentEven } from '../src/problems/solved/2404_most-frequent-even-element.js';

describe('mostFrequentEven', () => {
        test('basic test 1', () => {
                expect(mostFrequentEven([0, 1, 2, 2, 4, 4, 1])).toStrictEqual(
                        2,
                );
        });

        test('basic test 2', () => {
                expect(mostFrequentEven([4, 4, 4, 9, 2, 4])).toStrictEqual(4);
        });

        test('basic test 3', () => {
                expect(
                        mostFrequentEven([29, 47, 21, 41, 13, 37, 25, 7]),
                ).toStrictEqual(-1);
        });

        test('custom test 1', () => {
                expect(mostFrequentEven([0, 1, 4, 4, 2, 2])).toStrictEqual(2);
        });
});
