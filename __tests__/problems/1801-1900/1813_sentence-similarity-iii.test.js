import { describe, expect, test } from 'bun:test';
import { areSentencesSimilar } from '../../../src/problems/1801-1900/1813_sentence-similarity-iii.js';

const testcases = [
        {
                sentence1: 'My name is Haley',
                sentence2: 'My Haley',
                expected: true,
        },
        { sentence1: 'of', sentence2: 'A lot of words', expected: false },
        { sentence1: 'Eating right now', sentence2: 'Eating', expected: true },
        { sentence1: 'A B C D', sentence2: 'A B', expected: true },
        { sentence1: 'A B C D', sentence2: 'A D', expected: true },
        { sentence1: 'A B C D', sentence2: 'A C D', expected: true },
        { sentence1: 'A B C D E', sentence2: 'A D E', expected: true },
        { sentence1: 'A B C D', sentence2: 'C D', expected: true },
        { sentence1: 'A B C D B B', sentence2: 'A B B', expected: true },
];

describe('areSentencesSimilar', () => {
        test.each(
                structuredClone(testcases),
        )('areSentencesSimilar($sentence1, $sentence2) -> $expected', ({
                sentence1,
                sentence2,
                expected,
        }) => {
                expect(areSentencesSimilar(sentence1, sentence2)).toStrictEqual(
                        expected,
                );
        });
});
