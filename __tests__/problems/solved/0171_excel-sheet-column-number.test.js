import { describe, expect, test } from 'bun:test';
import { titleToNumber } from '../../../src/problems/solved/0171_excel-sheet-column-number.js';

describe('titleToNumber', () => {
        test('basic test 1', () => {
                expect(titleToNumber('A')).toStrictEqual(1);
        });

        test('basic test 2', () => {
                expect(titleToNumber('AB')).toStrictEqual(28);
        });

        test('basic test 3', () => {
                expect(titleToNumber('ZY')).toStrictEqual(701);
        });

        test('custom test 1', () => {
                expect(titleToNumber('AAA')).toStrictEqual(703);
        });

        test('custom test 2', () => {
                expect(titleToNumber('AAAA')).toStrictEqual(18_279);
        });

        test('custom test 3', () => {
                expect(titleToNumber('FXSHRXW')).toStrictEqual(2_147_483_647);
        });
});
