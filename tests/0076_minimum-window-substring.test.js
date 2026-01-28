/** biome-ignore-all lint/complexity/noExcessiveLinesPerFunction: <explanation> */
import { describe, expect, test } from 'vitest';
import { minWindow } from '../src/problems/wip/0076_minimum-window-substring.js';

describe('minWindow', () => {
        // test('basic test 1', () => {
        //         expect(minWindow('ADOBECODEBANC', 'ABC')).toStrictEqual('BANC');
        // });

        // test('basic test 2', () => {
        //         expect(minWindow('a', 'a')).toStrictEqual('a');
        // });

        // test('basic test 3', () => {
        //         expect(minWindow('a', 'aa')).toStrictEqual('');
        // });

        // test('basic test 4', () => {
        //         expect(minWindow('ab', 'b')).toStrictEqual('b');
        // });

        // test('basic test 5', () => {
        //         expect(minWindow('ab', 'a')).toStrictEqual('a');
        // });

        // test('basic test 6', () => {
        //         expect(minWindow('aa', 'aa')).toStrictEqual('aa');
        // });

        // test('basic test 7', () => {
        //         expect(minWindow('zzzzzzaab', 'baa')).toStrictEqual('aab');
        // });

        // test('basic test 8', () => {
        //         expect(minWindow('bba', 'ab')).toStrictEqual('ba');
        // });

        test('basic test 9', () => {
                expect(minWindow('acbbaca', 'aba')).toStrictEqual('baca');
        });

        // test('custom test 1', () => {
        //         expect(minWindow('ACOBECODEBAN', 'ABC')).toStrictEqual('ACOB');
        // });

        // test('custom test 2', () => {
        //         expect(minWindow('AYXCBECODEBANC', 'ABC')).toStrictEqual(
        //                 'BANC',
        //         );
        // });

        // test('custom test 3', () => {
        //         expect(minWindow('AXBC', 'ABC')).toStrictEqual('AXBC');
        // });

        // test('custom test 4', () => {
        //         expect(minWindow('AXBCZZZABC', 'ABC')).toStrictEqual('ABC');
        // });
});
