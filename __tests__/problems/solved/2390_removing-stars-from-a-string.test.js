import { describe, expect, test } from 'bun:test';
import {
        removeStars,
        removeStars1,
} from '../../../src/problems/solved/2390_removing-stars-from-a-string.js';

describe('removeStars', () => {
        describe('removeStars', () => {
                test('basic test 1', () => {
                        expect(removeStars('leet**cod*e')).toStrictEqual(
                                'lecoe',
                        );
                });

                test('basic test 2', () => {
                        expect(removeStars('erase*****')).toStrictEqual('');
                });
        });

        describe('removeStars1', () => {
                test('basic test 1', () => {
                        expect(removeStars1('leet**cod*e')).toStrictEqual(
                                'lecoe',
                        );
                });

                test('basic test 2', () => {
                        expect(removeStars1('erase*****')).toStrictEqual('');
                });
        });
});
