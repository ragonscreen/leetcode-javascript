import { describe, expect, test } from 'bun:test';
import { checkOnesSegment } from '../../../src/problems/solved/1784_check-if-binary-string-has-at-most-one-segment-of-ones.js';

describe('checkOnesSegment', () => {
        test('basic test 1', () => {
                expect(checkOnesSegment('1001')).toStrictEqual(false);
        });

        test('basic test 2', () => {
                expect(checkOnesSegment('110')).toStrictEqual(true);
        });
});
