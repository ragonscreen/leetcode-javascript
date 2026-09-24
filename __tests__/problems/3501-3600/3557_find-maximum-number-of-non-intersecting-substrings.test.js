import { describe, expect, test } from 'bun:test';

import { maxSubstrings } from '../../../src/problems/3501-3600/3557_find-maximum-number-of-non-intersecting-substrings.js';

const testcases = [
        { word: 'abcdeafdef', expected: 2 },
        { word: 'bcdaaaab', expected: 1 },
];

describe('maxSubstrings', () => {
        test.each(structuredClone(testcases))(
                'maxSubstrings($word) -> $expected',
                ({ word, expected }) => {
                        expect(maxSubstrings(word)).toStrictEqual(expected);
                },
        );
});
