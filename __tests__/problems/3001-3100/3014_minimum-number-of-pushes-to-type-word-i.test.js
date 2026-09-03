import { describe, expect, test } from 'bun:test';

import {
        minimumPushes,
        minimumPushes1,
} from '../../../src/problems/3001-3100/3014_minimum-number-of-pushes-to-type-word-i.js';

const testcases = [
        { word: 'abcde', expected: 5 },
        { word: 'xycdefghij', expected: 12 },
        { word: 'abcdefghijklmnopqrstu', expected: 39 },
];

describe('minimumPushes', () => {
        test.each(structuredClone(testcases))(
                'minimumPushes($word) -> $expected',
                ({ word, expected }) => {
                        expect(minimumPushes(word)).toStrictEqual(expected);
                },
        );
});

describe('minimumPushes1', () => {
        test.each(structuredClone(testcases))(
                'minimumPushes1($word) -> $expected',
                ({ word, expected }) => {
                        expect(minimumPushes1(word)).toStrictEqual(expected);
                },
        );
});
