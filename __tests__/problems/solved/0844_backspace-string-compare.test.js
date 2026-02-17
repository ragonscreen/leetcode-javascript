import { describe, expect, test } from 'bun:test';
import { backspaceCompare } from '../../../src/problems/solved/0844_backspace-string-compare.js';

describe('backspaceCompare', () => {
        test('basic test 1', () => {
                expect(backspaceCompare('ab#c', 'ad#c')).toStrictEqual(true);
        });

        test('basic test 1', () => {
                expect(backspaceCompare('ab##', 'c#d#')).toStrictEqual(true);
        });

        test('basic test 1', () => {
                expect(backspaceCompare('a#c', 'b')).toStrictEqual(false);
        });
});
