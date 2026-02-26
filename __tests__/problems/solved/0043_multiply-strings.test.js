import { describe, expect, test } from 'bun:test';
import { multiply } from '../../../src/problems/solved/0043_multiply-strings.js';

describe('multiply', () => {
        test('basic test 1', () => {
                expect(multiply('2', '3')).toStrictEqual('6');
        });

        test('basic test 2', () => {
                expect(multiply('123', '456')).toStrictEqual('56088');
        });

        test('basic test 3', () => {
                expect(multiply('9', '9')).toStrictEqual('81');
        });

        test('basic test 4', () => {
                expect(multiply('9133', '0')).toStrictEqual('0');
        });

        test('basic test 5', () => {
                expect(multiply('140', '721')).toStrictEqual('100940');
        });

        test('custom test 1', () => {
                expect(multiply('723', '11')).toStrictEqual('7953');
        });
});
