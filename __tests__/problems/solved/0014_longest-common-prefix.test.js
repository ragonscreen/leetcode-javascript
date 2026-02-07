// biome-ignore-all lint/complexity/noExcessiveLinesPerFunction: multiple tests in one describe function

import { describe, expect, test } from 'bun:test';
import {
        longestCommonPrefix,
        longestCommonPrefix1,
} from '../../../src/problems/solved/0014_longest-common-prefix.js';

describe('longestCommonPrefix', () => {
        describe('longestCommonPrefix', () => {
                test('basic test 1', () => {
                        expect(
                                longestCommonPrefix([
                                        'flower',
                                        'flow',
                                        'flight',
                                ]),
                        ).toStrictEqual('fl');
                });

                test('basic test 2', () => {
                        expect(
                                longestCommonPrefix(['dog', 'racecar', 'car']),
                        ).toStrictEqual('');
                });

                test('custom test 1', () => {
                        expect(
                                longestCommonPrefix([
                                        'flow',
                                        'flower',
                                        'flight',
                                ]),
                        ).toStrictEqual('fl');
                });

                test('custom test 2', () => {
                        expect(
                                longestCommonPrefix(['flow', 'flower', 'flo']),
                        ).toStrictEqual('flo');
                });
        });
        describe('longestCommonPrefix1', () => {
                test('basic test 1', () => {
                        expect(
                                longestCommonPrefix1([
                                        'flower',
                                        'flow',
                                        'flight',
                                ]),
                        ).toStrictEqual('fl');
                });

                test('basic test 2', () => {
                        expect(
                                longestCommonPrefix1(['dog', 'racecar', 'car']),
                        ).toStrictEqual('');
                });

                test('custom test 1', () => {
                        expect(
                                longestCommonPrefix1([
                                        'flow',
                                        'flower',
                                        'flight',
                                ]),
                        ).toStrictEqual('fl');
                });

                test('custom test 2', () => {
                        expect(
                                longestCommonPrefix1(['flow', 'flower', 'flo']),
                        ).toStrictEqual('flo');
                });
        });
});
