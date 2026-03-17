import { describe, expect, test } from 'bun:test';
import {
        checkInclusion,
        checkInclusion1,
} from '../../../src/problems/0501-0600/0567_permutation-in-string.js';

const testcases = [
        { s1: 'ab', s2: 'eidbaooo', expected: true },
        { s1: 'ab', s2: 'eidboaoo', expected: false },
        { s1: 'abc', s2: 'bbbca', expected: true },
        {
                s1: 'trinitrophenylmethylnitramine',
                s2: 'dinitrophenylhydrazinetrinitrophenylmethylnitramine',
                expected: true,
        },
        { s1: 'abc', s2: 'a', expected: false },
        { s1: 'abc', s2: 'cab', expected: true },
];

describe('checkInclusion', () => {
        test.each(
                structuredClone(testcases),
        )('checkInclusion($s1, $s2) -> $expected', ({ s1, s2, expected }) => {
                expect(checkInclusion(s1, s2)).toStrictEqual(expected);
        });
});

describe('checkInclusion1', () => {
        test.each(
                structuredClone(testcases),
        )('checkInclusion1($s1, $s2) -> $expected', ({ s1, s2, expected }) => {
                expect(checkInclusion1(s1, s2)).toStrictEqual(expected);
        });
});
