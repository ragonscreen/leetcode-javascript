import { describe, expect, test } from 'bun:test';
import { minimizedStringLength } from '../../../src/problems/solved/2716_minimize-string-length.js';

describe('minimizedStringLength', () => {
        test('basic test 1', () => {
                expect(minimizedStringLength('aaabc')).toStrictEqual(3);
        });

        test('basic test 2', () => {
                expect(minimizedStringLength('cbbd')).toStrictEqual(3);
        });

        test('basic test 3', () => {
                expect(minimizedStringLength('baadccab')).toStrictEqual(4);
        });
});
