import { describe, expect, test } from 'bun:test';
import { decodeString } from '../../../src/problems/solved/0394_decode-string.js';

describe('decodeString', () => {
        test('basic test 1', () => {
                expect(decodeString('3[a]2[bc]')).toStrictEqual('aaabcbc');
        });

        test('basic test 2', () => {
                expect(decodeString('3[a2[c]]')).toStrictEqual('accaccacc');
        });

        test('basic test 3', () => {
                expect(decodeString('2[abc]3[cd]ef')).toStrictEqual(
                        'abcabccdcdcdef',
                );
        });

        test('basic test 4', () => {
                expect(decodeString('abc3[cd]xyz')).toStrictEqual(
                        'abccdcdcdxyz',
                );
        });

        test('basic test 5', () => {
                expect(
                        decodeString('3[z]2[2[y]pq4[2[jk]e1[f]]]ef'),
                ).toStrictEqual(
                        'zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef',
                );
        });

        test('custom test 1', () => {
                expect(decodeString('3[ab2[c]d]')).toStrictEqual(
                        'abccdabccdabccd',
                );
        });

        test('custom test 2', () => {
                expect(decodeString('2[ab2[c2[d2[e]f]g]h]i')).toStrictEqual(
                        'abcdeefdeefgcdeefdeefghabcdeefdeefgcdeefdeefghi',
                );
        });

        test('custom test 3', () => {
                expect(decodeString('12[a]')).toStrictEqual('aaaaaaaaaaaa');
        });

        test('custom test 4', () => {
                expect(decodeString('12[a2[b]]')).toStrictEqual(
                        'abbabbabbabbabbabbabbabbabbabbabbabb',
                );
        });

        test('custom test 5', () => {
                expect(decodeString('2[2[2[a]]]')).toStrictEqual('aaaaaaaa');
        });

        test('custom test 6', () => {
                expect(decodeString('2[2[a]b]')).toStrictEqual('aabaab');
        });
});
