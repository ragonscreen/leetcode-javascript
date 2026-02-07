// biome-ignore-all lint/complexity/noExcessiveLinesPerFunction: multiple tests in one describe function

import { describe, expect, test } from 'bun:test';
import {
        checkInclusion,
        checkInclusion1,
} from '../../../src/problems/solved/0567_permutation-in-string.js';

describe('checkInclusion', () => {
        describe('checkInclusion', () => {
                test('basic test 1', () => {
                        expect(checkInclusion('ab', 'eidbaooo')).toStrictEqual(
                                true,
                        );
                });

                test('basic test 2', () => {
                        expect(checkInclusion('ab', 'eidboaoo')).toStrictEqual(
                                false,
                        );
                });

                test('basic test 3', () => {
                        expect(checkInclusion('abc', 'bbbca')).toStrictEqual(
                                true,
                        );
                });

                test('basic test 4', () => {
                        expect(
                                checkInclusion(
                                        'trinitrophenylmethylnitramine',
                                        'dinitrophenylhydrazinetrinitrophenylmethylnitramine',
                                ),
                        ).toStrictEqual(true);
                });

                test('custom test 1', () => {
                        expect(checkInclusion('abc', 'a')).toStrictEqual(false);
                });

                test('custom test 2', () => {
                        expect(checkInclusion('abc', 'cab')).toStrictEqual(
                                true,
                        );
                });
        });

        describe('checkInclusion1', () => {
                test('basic test 1', () => {
                        expect(checkInclusion1('ab', 'eidbaooo')).toStrictEqual(
                                true,
                        );
                });

                test('basic test 2', () => {
                        expect(checkInclusion1('ab', 'eidboaoo')).toStrictEqual(
                                false,
                        );
                });

                test('basic test 3', () => {
                        expect(checkInclusion1('abc', 'bbbca')).toStrictEqual(
                                true,
                        );
                });

                test('basic test 4', () => {
                        expect(
                                checkInclusion1(
                                        'trinitrophenylmethylnitramine',
                                        'dinitrophenylhydrazinetrinitrophenylmethylnitramine',
                                ),
                        ).toStrictEqual(true);
                });

                test('custom test 1', () => {
                        expect(checkInclusion1('abc', 'a')).toStrictEqual(
                                false,
                        );
                });

                test('custom test 2', () => {
                        expect(checkInclusion1('abc', 'cab')).toStrictEqual(
                                true,
                        );
                });
        });
});
