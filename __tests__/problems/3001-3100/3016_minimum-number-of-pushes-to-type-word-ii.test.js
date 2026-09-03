import { describe, expect, test } from 'bun:test';

import { minimumPushes } from '../../../src/problems/3001-3100/3016_minimum-number-of-pushes-to-type-word-ii.js';

const testcases = [
        { word: 'abcde', expected: 5 },
        { word: 'xyzxyzxyzxyz', expected: 12 },
        { word: 'aabbccddeeffgghhiiiiii', expected: 24 },
];

describe('minimumPushes', () => {
        test.each(structuredClone(testcases))(
                'minimumPushes($word) -> $expected',
                ({ word, expected }) => {
                        expect(minimumPushes(word)).toStrictEqual(expected);
                },
        );
});
