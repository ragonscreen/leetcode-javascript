import { describe, expect, test } from 'bun:test';
import { kthGrammar } from '../../../src/problems/solved/0779_k-th-symbol-in-grammar.js';

describe('kthGrammar', () => {
        test('basic test 1', () => {
                expect(kthGrammar(1, 1)).toStrictEqual(0);
        });

        test('basic test 2', () => {
                expect(kthGrammar(2, 1)).toStrictEqual(0);
        });

        test('basic test 3', () => {
                expect(kthGrammar(2, 2)).toStrictEqual(1);
        });

        test('basic test 4', () => {
                expect(kthGrammar(5, 1)).toStrictEqual(0);
        });

        test('basic test 5', () => {
                expect(kthGrammar(30, 434_991_989)).toStrictEqual(0);
        });

        test('basic test 6', () => {
                expect(kthGrammar(4, 6)).toStrictEqual(0);
        });

        test('basic test 7', () => {
                expect(kthGrammar(12, 487)).toStrictEqual(0);
        });

        test('custom test 1', () => {
                expect(kthGrammar(7, 15)).toStrictEqual(1);
        });
});
