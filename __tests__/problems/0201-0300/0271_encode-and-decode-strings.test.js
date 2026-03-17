import { describe, expect, test } from 'bun:test';
import { Solution } from '../../../src/problems/0201-0300/0271_encode-and-decode-strings.js';

describe('Solution', () => {
        test('default test 1', () => {
                const dummyInput = ['Hello', 'World'];
                const solution = new Solution();
                const encoded = solution.encode(dummyInput);
                const decoded = solution.decode(encoded);

                expect(decoded).toStrictEqual(dummyInput);
        });

        test('default test 2', () => {
                const dummyInput = [
                        'qwertyuiopasdfghjklzxcvbnm',
                        '0123456789',
                        'qwertyuiopasdfghjklzxcvbnm',
                ];
                const solution = new Solution();
                const encoded = solution.encode(dummyInput);
                const decoded = solution.decode(encoded);

                expect(decoded).toStrictEqual(dummyInput);
        });

        test('default test 3', () => {
                const dummyInput = [
                        ':`~a_@!;&&##',
                        '[{()}]',
                        '$$$',
                        '%%',
                        '^<>,...',
                        `'"'"`,
                        '+-=/*',
                        '?\\|',
                ];
                const solution = new Solution();
                const encoded = solution.encode(dummyInput);
                const decoded = solution.decode(encoded);

                expect(decoded).toStrictEqual(dummyInput);
        });

        test('default test 4', () => {
                const dummyInput = ['', '0123456789.', ''];
                const solution = new Solution();
                const encoded = solution.encode(dummyInput);
                const decoded = solution.decode(encoded);

                expect(decoded).toStrictEqual(dummyInput);
        });
});
