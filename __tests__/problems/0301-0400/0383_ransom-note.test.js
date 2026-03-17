import { describe, expect, test } from 'bun:test';
import { canConstruct } from '../../../src/problems/0301-0400/0383_ransom-note.js';

const testcases = [
        { ransomNote: 'a', magazine: 'b', expected: false },
        { ransomNote: 'aa', magazine: 'ab', expected: false },
        { ransomNote: 'aa', magazine: 'aab', expected: true },
];

describe('canConstruct', () => {
        test.each(
                testcases,
        )('canConstruct($ransomNote, $magazine) -> $expected', ({
                ransomNote,
                magazine,
                expected,
        }) => {
                expect(canConstruct(ransomNote, magazine)).toStrictEqual(
                        expected,
                );
        });
});
