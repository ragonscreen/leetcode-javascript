import { describe, expect, test } from 'bun:test';

import { decodeAtIndex } from '../../../src/problems/0801-0900/0880_decoded-string-at-index.js';

const testcases = [
        { s: 'leet2code3', k: 10, expected: 'o' },
        { s: 'ha22', k: 5, expected: 'h' },
        { s: 'a2345678999999999999999', k: 1, expected: 'a' },
];

describe('decodeAtIndex', () => {
        test.each(structuredClone(testcases))(
                'decodeAtIndex($s, $k) -> $expected',
                ({ s, k, expected }) => {
                        expect(decodeAtIndex(s, k)).toStrictEqual(expected);
                },
        );
});
