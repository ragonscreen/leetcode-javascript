// biome-ignore-all lint/complexity/noExcessiveLinesPerFunction: multiple tests in one describe function

import { describe, expect, test } from 'bun:test';
import { Solution } from '../../../src/problems/solved/0271_encode-and-decode-strings.js';

describe('encode and decode strings', () => {
        const solution = new Solution();

        test('encodes and decodes correctly', () => {
                const received = solution.decode(
                        solution.encode(['neet', 'code', 'love', 'you']),
                );
                const expected = ['neet', 'code', 'love', 'you'];

                expect(received).toStrictEqual(expected);
        });

        test('handles long inputs', () => {
                const received = solution.decode(
                        solution.encode([
                                'qwertyuiopasdfghjklzxcvbnm',
                                '0123456789',
                                'qwertyuiopasdfghjklzxcvbnm',
                        ]),
                );
                const expected = [
                        'qwertyuiopasdfghjklzxcvbnm',
                        '0123456789',
                        'qwertyuiopasdfghjklzxcvbnm',
                ];

                expect(received).toStrictEqual(expected);
        });

        test('handles special characters', () => {
                const received = solution.decode(
                        solution.encode([
                                ':`~',
                                'a_',
                                '!',
                                '[{()}]',
                                '@',
                                '##',
                                '$$$',
                                '%%',
                                '^<>,...',
                                '&&',
                                ';',
                                '""',
                                "'''",
                                '+-=/*',
                                '?\\|',
                        ]),
                );
                const expected = [
                        ':`~',
                        'a_',
                        '!',
                        '[{()}]',
                        '@',
                        '##',
                        '$$$',
                        '%%',
                        '^<>,...',
                        '&&',
                        ';',
                        '""',
                        "'''",
                        '+-=/*',
                        '?\\|',
                ];

                expect(received).toStrictEqual(expected);
        });

        test('handles empty characters', () => {
                const received = solution.decode(
                        solution.encode(['', '0123456789.', '']),
                );
                const expected = ['', '0123456789.', ''];

                expect(received).toStrictEqual(expected);
        });
});
