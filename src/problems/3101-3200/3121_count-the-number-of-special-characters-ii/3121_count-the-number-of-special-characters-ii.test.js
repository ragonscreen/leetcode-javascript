import { describe, expect, test } from 'bun:test';

import { numberOfSpecialChars } from './3121_count-the-number-of-special-characters-ii.js';

const testcases = [
        { word: 'aaAbcBC', expected: 3 },
        { word: 'abc', expected: 0 },
        { word: 'AbBCab', expected: 0 },
];

describe('numberOfSpecialChars', () => {
        test.each(structuredClone(testcases))(
                'numberOfSpecialChars($word) -> $expected',
                ({ word, expected }) => {
                        expect(numberOfSpecialChars(word)).toStrictEqual(expected);
                },
        );
});
