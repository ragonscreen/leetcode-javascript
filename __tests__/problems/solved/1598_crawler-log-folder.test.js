import { describe, expect, test } from 'bun:test';
import { minOperations } from '../../../src/problems/solved/1598_crawler-log-folder.js';

describe('minOperations', () => {
        test('basic test 1', () => {
                expect(
                        minOperations(['d1/', 'd2/', '../', 'd21/', './']),
                ).toStrictEqual(2);
        });

        test('basic test 2', () => {
                expect(
                        minOperations([
                                'd1/',
                                'd2/',
                                './',
                                'd3/',
                                '../',
                                'd31/',
                        ]),
                ).toStrictEqual(3);
        });

        test('basic test 3', () => {
                expect(
                        minOperations(['d1/', '../', '../', '../']),
                ).toStrictEqual(0);
        });
});
