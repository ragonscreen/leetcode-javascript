import { describe, expect, test } from 'bun:test';

import { reorganizeString } from '../../../src/problems/0701-0800/0767_reorganize-string.js';

const testcases = [
        { s: 'aab', expected: 'aba' },
        { s: 'aaab', expected: '' },
        { s: 'ababa', expected: 'ababa' },
        { s: 'abab', expected: 'abab' },
        { s: 'aaaab', expected: '' },
        { s: 'aaabc', expected: 'abaca' },
        { s: 'blflxll', expected: 'lblflxl' },
        { s: 'ogccckcwmbmxtsbmozli', expected: 'cocgcickmlmsmtbwbxoz' },
        { s: 'aabbcc', expected: 'abacbc' },
];

describe('reorganizeString', () => {
        test.each(structuredClone(testcases))(
                'reorganizeString($s) -> $expected',
                ({ s, expected }) => {
                        const actual = reorganizeString(s);

                        if (expected === '') {
                                expect(actual).toStrictEqual(expected);
                        } else {
                                expect(actual).toHaveLength(expected.length);
                                expect(
                                        [...actual].every((e, i, a) => i === 0 || e !== a[i - 1]),
                                ).toStrictEqual(true);
                        }
                },
        );
});
