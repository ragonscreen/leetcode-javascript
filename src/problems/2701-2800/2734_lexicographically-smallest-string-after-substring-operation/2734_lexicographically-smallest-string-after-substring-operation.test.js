import { describe, expect, test } from 'bun:test';

import { smallestString } from './2734_lexicographically-smallest-string-after-substring-operation.js';

const testcases = [
        { s: 'cbabc', expected: 'baabc' },
        { s: 'aa', expected: 'az' },
        { s: 'acbbc', expected: 'abaab' },
        { s: 'leetcode', expected: 'kddsbncd' },
];

describe('smallestString', () => {
        test.each(structuredClone(testcases))(
                'smallestString($s) -> $expected',
                ({ s, expected }) => {
                        expect(smallestString(s)).toStrictEqual(expected);
                },
        );
});
