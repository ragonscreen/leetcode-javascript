import { describe, expect, test } from 'bun:test';
import {
        addBinary,
        addBinary1,
} from '../../../src/problems/0001-0100/0067_add-binary.js';

const testcases = [
        { a: '11', b: '1', expected: '100' },
        { a: '1010', b: '1011', expected: '10101' },
        { a: '111', b: '111', expected: '1110' },
];

describe('addBinary', () => {
        test.each(
                structuredClone(testcases),
        )('addBinary($a, $b) -> $expected', ({ a, b, expected }) => {
                expect(addBinary(a, b)).toStrictEqual(expected);
        });
});

describe('addBinary1', () => {
        test.each(
                structuredClone(testcases),
        )('addBinary1($a, $b) -> $expected', ({ a, b, expected }) => {
                expect(addBinary1(a, b)).toStrictEqual(expected);
        });
});
