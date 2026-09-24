import { describe, expect, test } from 'bun:test';

import {
        countHomogenous,
        countHomogenous1,
} from '../../../src/problems/1701-1800/1759_count-number-of-homogenous-substrings.js';

const testcases = [
        { s: 'abbcccaa', expected: 13 },
        { s: 'xy', expected: 2 },
        { s: 'zzzzz', expected: 15 },
];

describe('countHomogenous', () => {
        test.each(structuredClone(testcases))(
                'countHomogenous($s) -> $expected',
                ({ s, expected }) => {
                        expect(countHomogenous(s)).toStrictEqual(expected);
                },
        );
});

describe('countHomogenous1', () => {
        test.each(structuredClone(testcases))(
                'countHomogenous1($s) -> $expected',
                ({ s, expected }) => {
                        expect(countHomogenous1(s)).toStrictEqual(expected);
                },
        );
});
