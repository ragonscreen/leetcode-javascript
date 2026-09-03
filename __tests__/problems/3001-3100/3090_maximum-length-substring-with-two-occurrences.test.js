import { describe, expect, test } from 'bun:test';

import { maximumLengthSubstring } from '../../../src/problems/3001-3100/3090_maximum-length-substring-with-two-occurrences.js';

const testcases = [
        { s: 'bcbbbcba', expected: 4 },
        { s: 'aaaa', expected: 2 },
];

describe('maximumLengthSubstring', () => {
        test.each(structuredClone(testcases))(
                'maximumLengthSubstring($s) -> $expected',
                ({ s, expected }) => {
                        expect(maximumLengthSubstring(s)).toStrictEqual(expected);
                },
        );
});
