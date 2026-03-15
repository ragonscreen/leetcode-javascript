import { describe, expect, test } from 'bun:test';
import { makeGood } from '../../../src/problems/solved/1544_make-the-string-great.js';

describe('makeGood', () => {
        test('basic test 1', () => {
                expect(makeGood('leEeetcode')).toStrictEqual('leetcode');
        });

        test('basic test 2', () => {
                expect(makeGood('abBAcC')).toStrictEqual('');
        });

        test('basic test 3', () => {
                expect(makeGood('s')).toStrictEqual('s');
        });

        test('custom test 1', () => {
                expect(makeGood('leFeetcode')).toStrictEqual('leFeetcode');
        });

        test('custom test 2', () => {
                expect(makeGood('lEeeetcode')).toStrictEqual('leetcode');
        });

        test('custom test 3', () => {
                expect(makeGood('leeEEeetcode')).toStrictEqual('leetcode');
        });
});
