import { describe, expect, test } from 'bun:test';
import { canSeePersonsCount } from '../../../src/problems/solved/1944_number-of-visible-people-in-a-queue.js';

describe('canSeePersonsCount', () => {
        test('basic test 1', () => {
                expect(canSeePersonsCount([10, 6, 8, 5, 11, 9])).toStrictEqual([
                        3, 1, 2, 1, 1, 0,
                ]);
        });

        test('basic test 2', () => {
                expect(canSeePersonsCount([5, 1, 2, 3, 10])).toStrictEqual([
                        4, 1, 1, 1, 0,
                ]);
        });

        test('basic test 3', () => {
                expect(canSeePersonsCount([2])).toStrictEqual([0]);
        });
});
