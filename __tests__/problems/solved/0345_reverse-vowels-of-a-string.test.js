import { describe, expect, test } from 'bun:test';
import { reverseVowels } from '../../../src/problems/solved/0345_reverse-vowels-of-a-string.js';

describe('reverseVowels', () => {
        test('basic test 1', () => {
                expect(reverseVowels('IceCreAm')).toStrictEqual('AceCreIm');
        });

        test('basic test 2', () => {
                expect(reverseVowels('leetcode')).toStrictEqual('leotcede');
        });
});
