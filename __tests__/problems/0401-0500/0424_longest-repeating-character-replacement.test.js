import { describe, expect, test } from 'bun:test';
import { characterReplacement } from '../../../src/problems/0401-0500/0424_longest-repeating-character-replacement.js';

const testcases = [
        { s: 'ABAB', k: 2, expected: 4 },
        { s: 'AABABBA', k: 1, expected: 4 },
        { s: 'ABBB', k: 2, expected: 4 },
        { s: 'BAAAB', k: 2, expected: 5 },
        { s: 'AAAB', k: 0, expected: 3 },
        { s: 'ABAB', k: 0, expected: 1 },
        {
                s: 'KRSCDCSONAJNHLBMDQGIFCPEKPOHQIHLTDIQGEKLRLCQNBOHNDQGHJPNDQPERNFSSSRDEQLFPCCCARFMDLHADJADAGNNSBNCJQOF',
                k: 4,
                expected: 7,
        },
        {
                s: 'IMNJJTRMJEGMSOLSCCQICIHLQIOGBJAEHQOCRAJQMBIBATGLJDTBNCPIFRDLRIJHRABBJGQAOLIKRLHDRIGERENNMJSDSSMESSTR',
                k: 2,
                expected: 6,
        },
        { s: 'ABCDEFAHIJK', k: 5, expected: 7 },
        { s: 'CYZCAXA', k: 1, expected: 3 },
];

describe('characterReplacement', () => {
        test.each(
                structuredClone(testcases),
        )('characterReplacement($s, $k) -> $expected', ({ s, k, expected }) => {
                expect(characterReplacement(s, k)).toStrictEqual(expected);
        });
});
