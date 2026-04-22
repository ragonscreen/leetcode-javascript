import { describe, expect, test } from 'bun:test';
import { twoEditWords } from '../../../src/problems/2401-2500/2452_words-within-two-edits-of-dictionary.js';

const testcases = [
        {
                queries: ['word', 'note', 'ants', 'wood'],
                dictionary: ['wood', 'joke', 'moat'],
                expected: ['word', 'note', 'wood'],
        },
        { queries: ['yes'], dictionary: ['not'], expected: [] },
        {
                queries: [
                        'tsl',
                        'sri',
                        'yyy',
                        'rbc',
                        'dda',
                        'qus',
                        'hyb',
                        'ilu',
                        'ahd',
                ],
                dictionary: [
                        'uyj',
                        'bug',
                        'dba',
                        'xbe',
                        'blu',
                        'wuo',
                        'tsf',
                        'tga',
                ],
                expected: ['tsl', 'yyy', 'rbc', 'dda', 'qus', 'hyb', 'ilu'],
        },
];

describe('twoEditWords', () => {
        test.each(
                structuredClone(testcases),
        )('twoEditWords($queries, $dictionary) -> $expected', ({
                queries,
                dictionary,
                expected,
        }) => {
                expect(twoEditWords(queries, dictionary)).toStrictEqual(
                        expected,
                );
        });
});
