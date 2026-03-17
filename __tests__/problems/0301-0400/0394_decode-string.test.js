import { describe, expect, test } from 'bun:test';
import { decodeString } from '../../../src/problems/0301-0400/0394_decode-string.js';

const testcases = [
        { s: '3[a]2[bc]', expected: 'aaabcbc' },
        { s: '3[a2[c]]', expected: 'accaccacc' },
        { s: '2[abc]3[cd]ef', expected: 'abcabccdcdcdef' },
        { s: 'abc3[cd]xyz', expected: 'abccdcdcdxyz' },
        {
                s: '3[z]2[2[y]pq4[2[jk]e1[f]]]ef',
                expected: 'zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef',
        },
        { s: '3[ab2[c]d]', expected: 'abccdabccdabccd' },
        {
                s: '2[ab2[c2[d2[e]f]g]h]i',
                expected: 'abcdeefdeefgcdeefdeefghabcdeefdeefgcdeefdeefghi',
        },
        { s: '12[a]', expected: 'aaaaaaaaaaaa' },
        { s: '12[a2[b]]', expected: 'abbabbabbabbabbabbabbabbabbabbabbabb' },
        { s: '2[2[2[a]]]', expected: 'aaaaaaaa' },
        { s: '2[2[a]b]', expected: 'aabaab' },
];

describe('decodeString', () => {
        test.each(
                structuredClone(testcases),
        )('decodeString($s) -> $expected', ({ s, expected }) => {
                expect(decodeString(s)).toStrictEqual(expected);
        });
});
