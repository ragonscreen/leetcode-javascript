import { describe, expect, test } from 'bun:test';
import { validateStackSequences } from '../../../src/problems/solved/0946_validate-stack-sequences.js';

describe('validateStackSequences', () => {
        test('basic test 1', () => {
                expect(
                        validateStackSequences(
                                [1, 2, 3, 4, 5],
                                [4, 5, 3, 2, 1],
                        ),
                ).toStrictEqual(true);
        });

        test('basic test 2', () => {
                expect(
                        validateStackSequences(
                                [1, 2, 3, 4, 5],
                                [4, 3, 5, 1, 2],
                        ),
                ).toStrictEqual(false);
        });

        test('basic test 3', () => {
                expect(
                        validateStackSequences([2, 1, 0], [1, 2, 0]),
                ).toStrictEqual(true);
        });
});
