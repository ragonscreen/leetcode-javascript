import { describe, expect, test } from 'vitest';
import { getConcatenation } from '../../../src/problems/solved/1929_concatenation-of-array.js';

describe('getConcatenation', () => {
        test('basic test 1', () => {
                expect(getConcatenation([1, 2, 1])).toStrictEqual([
                        1, 2, 1, 1, 2, 1,
                ]);
        });

        test('basic test 2', () => {
                expect(getConcatenation([1, 3, 2, 1])).toStrictEqual([
                        1, 3, 2, 1, 1, 3, 2, 1,
                ]);
        });
});
