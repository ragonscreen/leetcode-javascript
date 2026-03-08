import { describe, expect, test } from 'bun:test';
import { findDifferentBinaryString } from '../../../src/problems/solved/1980_find-unique-binary-string.js';

describe('findDifferentBinaryString', () => {
        test('basic test 1', () => {
                expect(findDifferentBinaryString(['01', '10'])).toBeOneOf([
                        '00',
                        '11',
                ]);
        });

        test('basic test 2', () => {
                expect(findDifferentBinaryString(['00', '01'])).toBeOneOf([
                        '10',
                        '11',
                ]);
        });

        test('basic test 3', () => {
                expect(
                        findDifferentBinaryString(['111', '011', '001']),
                ).toBeOneOf(['000', '010', '100', '101', '110']);
        });

        test('custom test 1', () => {
                expect(
                        findDifferentBinaryString([
                                '0000',
                                '0111',
                                '1111',
                                '1010',
                        ]),
                ).toBeOneOf([
                        '1000',
                        '1100',
                        '1110',
                        '1101',
                        '1011',
                        '1001',
                        '0100',
                        '0110',
                        '0101',
                        '0010',
                        '0011',
                        '0001',
                ]);
        });
});
