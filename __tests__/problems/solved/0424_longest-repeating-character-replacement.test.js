import { describe, expect, test } from 'bun:test';
import { characterReplacement } from '../../../src/problems/solved/0424_longest-repeating-character-replacement.js';

describe('characterReplacement', () => {
        test('basic test 1', () => {
                expect(characterReplacement('ABAB', 2)).toStrictEqual(4);
        });

        test('basic test 2', () => {
                expect(characterReplacement('AABABBA', 1)).toStrictEqual(4);
        });

        test('basic test 3', () => {
                expect(characterReplacement('ABBB', 2)).toStrictEqual(4);
        });

        test('basic test 4', () => {
                expect(characterReplacement('BAAAB', 2)).toStrictEqual(5);
        });

        test('basic test 5', () => {
                expect(characterReplacement('AAAB', 0)).toStrictEqual(3);
        });

        test('basic test 6', () => {
                expect(characterReplacement('ABAB', 0)).toStrictEqual(1);
        });

        test('basic test 7', () => {
                expect(
                        characterReplacement(
                                'KRSCDCSONAJNHLBMDQGIFCPEKPOHQIHLTDIQGEKLRLCQNBOHNDQGHJPNDQPERNFSSSRDEQLFPCCCARFMDLHADJADAGNNSBNCJQOF',
                                4,
                        ),
                ).toStrictEqual(7);
        });

        test('basic test 8', () => {
                expect(
                        characterReplacement(
                                'IMNJJTRMJEGMSOLSCCQICIHLQIOGBJAEHQOCRAJQMBIBATGLJDTBNCPIFRDLRIJHRABBJGQAOLIKRLHDRIGERENNMJSDSSMESSTR',
                                2,
                        ),
                ).toStrictEqual(6);
        });

        test('custom test 1', () => {
                expect(characterReplacement('ABCDEFAHIJK', 5)).toStrictEqual(7);
        });

        test('custom test 2', () => {
                expect(characterReplacement('CYZCAXA', 1)).toStrictEqual(3);
        });
});
