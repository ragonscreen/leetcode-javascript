import { describe, expect, test } from 'bun:test';
import { getSneakyNumbers } from '../../../src/problems/solved/3289_the-two-sneaky-numbers-of-digitville.js';

describe('getSneakyNumbers', () => {
        test('basic test 1', () => {
                expect(getSneakyNumbers([0, 1, 1, 0])).toContainAllValues([
                        0, 1,
                ]);
        });

        test('basic test 2', () => {
                expect(getSneakyNumbers([0, 3, 2, 1, 3, 2])).toContainAllValues(
                        [2, 3],
                );
        });

        test('basic test 3', () => {
                expect(
                        getSneakyNumbers([7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2]),
                ).toContainAllValues([4, 5]);
        });
});
