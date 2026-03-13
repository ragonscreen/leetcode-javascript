// biome-ignore-all lint/complexity/noExcessiveLinesPerFunction: multiple tests in one describe function

import { describe, expect, test } from 'bun:test';
import { fullJustify } from '../../../src/problems/solved/0068_text-justification.js';

describe('fullJustify', () => {
        test('basic test 1', () => {
                expect(
                        fullJustify(
                                [
                                        'This',
                                        'is',
                                        'an',
                                        'example',
                                        'of',
                                        'text',
                                        'justification.',
                                ],
                                16,
                        ),
                ).toStrictEqual([
                        'This    is    an',
                        'example  of text',
                        'justification.  ',
                ]);
        });

        test('basic test 2', () => {
                expect(
                        fullJustify(
                                [
                                        'What',
                                        'must',
                                        'be',
                                        'acknowledgment',
                                        'shall',
                                        'be',
                                ],
                                16,
                        ),
                ).toStrictEqual([
                        'What   must   be',
                        'acknowledgment  ',
                        'shall be        ',
                ]);
        });

        test('basic test 3', () => {
                expect(
                        fullJustify(
                                [
                                        'Science',
                                        'is',
                                        'what',
                                        'we',
                                        'understand',
                                        'well',
                                        'enough',
                                        'to',
                                        'explain',
                                        'to',
                                        'a',
                                        'computer.',
                                        'Art',
                                        'is',
                                        'everything',
                                        'else',
                                        'we',
                                        'do',
                                ],
                                20,
                        ),
                ).toStrictEqual([
                        'Science  is  what we',
                        'understand      well',
                        'enough to explain to',
                        'a  computer.  Art is',
                        'everything  else  we',
                        'do                  ',
                ]);
        });
});
