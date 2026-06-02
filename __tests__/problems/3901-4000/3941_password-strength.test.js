import { describe, expect, test } from 'bun:test';
import {
        passwordStrength,
        passwordStrength1,
        passwordStrength2,
} from '../../../src/problems/3901-4000/3941_password-strength.js';

const testcases = [
        { password: 'aA1!', expected: 11 },
        { password: 'bbB11#', expected: 11 },
        { password: 'aA1', expected: 6 },
];

describe('passwordStrength', () => {
        test.each(
                structuredClone(testcases),
        )('passwordStrength($password) -> $expected', ({
                password,
                expected,
        }) => {
                expect(passwordStrength(password)).toStrictEqual(expected);
        });
});

describe('passwordStrength1', () => {
        test.each(
                structuredClone(testcases),
        )('passwordStrength1($password) -> $expected', ({
                password,
                expected,
        }) => {
                expect(passwordStrength1(password)).toStrictEqual(expected);
        });
});

describe('passwordStrength2', () => {
        test.each(
                structuredClone(testcases),
        )('passwordStrength2($password) -> $expected', ({
                password,
                expected,
        }) => {
                expect(passwordStrength2(password)).toStrictEqual(expected);
        });
});
