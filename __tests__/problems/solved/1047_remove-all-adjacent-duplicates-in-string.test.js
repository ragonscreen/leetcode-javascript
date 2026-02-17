import { describe, expect, test } from 'bun:test';
import { removeDuplicates } from '../../../src/problems/solved/1047_remove-all-adjacent-duplicates-in-string.js';

describe('removeDuplicates', () => {
        test('basic test 1', () => {
                expect(removeDuplicates('abbaca')).toStrictEqual('ca');
        });

        test('basic test 2', () => {
                expect(removeDuplicates('azxxzy')).toStrictEqual('ay');
        });
});
