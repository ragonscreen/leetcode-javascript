import { describe, expect, test } from 'bun:test';

import { maxNumOfSubstrings } from './1520_maximum-number-of-non-overlapping-substrings.js';

const testcases = [
        {
                s: 'adefaddacfc',
                expected: ['e'],
        },
        {
                s: 'adefaddaccc',
                expected: ['e', 'f', 'ccc'],
        },
        {
                s: 'abbaccd',
                expected: ['d', 'bb', 'cc'],
        },
];

describe('maxNumOfSubstrings', () => {
        test.each(structuredClone(testcases))(
                'maxNumOfSubstrings($s) -> $expected',
                ({ s, expected }) => {
                        expect(maxNumOfSubstrings(s)).toContainAllValues(expected);
                },
        );
});
