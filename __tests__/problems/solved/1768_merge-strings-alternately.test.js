import { describe, expect, test } from 'bun:test';
import { mergeAlternately } from '../../../src/problems/solved/1768_merge-strings-alternately.js';

describe('mergeAlternately', () => {
        test('basic test 1', () => {
                expect(mergeAlternately('abc', 'pqr')).toStrictEqual('apbqcr');
        });

        test('basic test 2', () => {
                expect(mergeAlternately('ab', 'pqrs')).toStrictEqual('apbqrs');
        });

        test('basic test 3', () => {
                expect(mergeAlternately('abcd', 'pq')).toStrictEqual('apbqcd');
        });
});
