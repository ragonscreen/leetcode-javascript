import { describe, expect, test } from 'bun:test';
import { canConstruct } from '../../../src/problems/solved/0383_ransom-note.js';

describe('canConstruct', () => {
        test('basic test 1', () => {
                expect(canConstruct('a', 'b')).toStrictEqual(false);
        });

        test('basic test 2', () => {
                expect(canConstruct('aa', 'ab')).toStrictEqual(false);
        });

        test('basic test 3', () => {
                expect(canConstruct('aa', 'aab')).toStrictEqual(true);
        });
});
