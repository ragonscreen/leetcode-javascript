import { describe, expect, test } from 'vitest';
import {
        finalString,
        finalString1,
} from '../../../src/problems/solved/2810_faulty-keyboard.js';

describe('finalString', () => {
        describe('finalString', () => {
                test('basic test 1', () => {
                        expect(finalString('string')).toStrictEqual('rtsng');
                });

                test('basic test 2', () => {
                        expect(finalString('poiinter')).toStrictEqual('ponter');
                });

                test('custom test 1', () => {
                        expect(finalString('poiinterii')).toStrictEqual(
                                'ponter',
                        );
                });

                test('custom test 2', () => {
                        expect(finalString('poiinteri')).toStrictEqual(
                                'retnop',
                        );
                });

                test('custom test 3', () => {
                        expect(finalString('pointeri')).toStrictEqual('retnpo');
                });
        });

        describe('finalString1', () => {
                test('basic test 1', () => {
                        expect(finalString1('string')).toStrictEqual('rtsng');
                });

                test('basic test 2', () => {
                        expect(finalString1('poiinter')).toStrictEqual(
                                'ponter',
                        );
                });

                test('custom test 1', () => {
                        expect(finalString1('poiinterii')).toStrictEqual(
                                'ponter',
                        );
                });

                test('custom test 2', () => {
                        expect(finalString1('poiinteri')).toStrictEqual(
                                'retnop',
                        );
                });

                test('custom test 3', () => {
                        expect(finalString1('pointeri')).toStrictEqual(
                                'retnpo',
                        );
                });
        });
});
