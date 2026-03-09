import { describe, expect, test } from 'bun:test';
import {
        findDisappearedNumbers,
        findDisappearedNumbers1,
} from '../../../src/problems/solved/0448_find-all-numbers-disappeared-in-an-array.js';

describe('findDisappearedNumbers', () => {
        describe('findDisappearedNumbers', () => {
                test('basic test 1', () => {
                        expect(
                                findDisappearedNumbers([
                                        4, 3, 2, 7, 8, 2, 3, 1,
                                ]),
                        ).toStrictEqual([5, 6]);
                });

                test('basic test 2', () => {
                        expect(findDisappearedNumbers([1, 1])).toStrictEqual([
                                2,
                        ]);
                });
        });
        describe('findDisappearedNumbers1', () => {
                test('basic test 1', () => {
                        expect(
                                findDisappearedNumbers1([
                                        4, 3, 2, 7, 8, 2, 3, 1,
                                ]),
                        ).toStrictEqual([5, 6]);
                });

                test('basic test 2', () => {
                        expect(findDisappearedNumbers1([1, 1])).toStrictEqual([
                                2,
                        ]);
                });
        });
});
