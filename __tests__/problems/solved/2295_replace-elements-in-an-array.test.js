import { describe, expect, test } from 'bun:test';
import { arrayChange } from '../../../src/problems/solved/2295_replace-elements-in-an-array.js';

describe('arrayChange', () => {
        test('basic test 1', () => {
                expect(
                        arrayChange(
                                [1, 2, 4, 6],
                                [
                                        [1, 3],
                                        [4, 7],
                                        [6, 1],
                                ],
                        ),
                ).toStrictEqual([3, 2, 7, 1]);
        });

        test('basic test 2', () => {
                expect(
                        arrayChange(
                                [1, 2],
                                [
                                        [1, 3],
                                        [2, 1],
                                        [3, 2],
                                ],
                        ),
                ).toStrictEqual([2, 1]);
        });
});
