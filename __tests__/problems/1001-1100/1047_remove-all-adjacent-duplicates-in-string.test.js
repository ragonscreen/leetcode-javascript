import { describe, expect, test } from 'bun:test';
import { removeDuplicates } from '../../../src/problems/1001-1100/1047_remove-all-adjacent-duplicates-in-string.js';

const testcases = [
        { s: 'abbaca', expected: 'ca' },
        { s: 'azxxzy', expected: 'ay' },
];

describe('removeDuplicates', () => {
        test.each(
                structuredClone(testcases),
        )('removeDuplicates($s) -> $expected', ({ s, expected }) => {
                expect(removeDuplicates(s)).toStrictEqual(expected);
        });
});
