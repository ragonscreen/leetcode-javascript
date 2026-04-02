import { describe, expect, test } from 'bun:test';
import { splitMessage } from '../../../src/problems/0000_wip/2468_split-message-based-on-limit.js';

const testcases = [
        {
                message: 'this is really a very awesome message',
                limit: 9,
                expected: [
                        'thi<1/14>',
                        's i<2/14>',
                        's r<3/14>',
                        'eal<4/14>',
                        'ly <5/14>',
                        'a v<6/14>',
                        'ery<7/14>',
                        ' aw<8/14>',
                        'eso<9/14>',
                        'me<10/14>',
                        ' m<11/14>',
                        'es<12/14>',
                        'sa<13/14>',
                        'ge<14/14>',
                ],
        },
        {
                message: 'short message',
                limit: 15,
                expected: ['short mess<1/2>', 'age<2/2>'],
        },
];

describe.skip('splitMessage', () => {
        test.each(
                structuredClone(testcases),
        )('splitMessage($message, $limit) -> $expected', ({
                message,
                limit,
                expected,
        }) => {
                expect(splitMessage(message, limit)).toStrictEqual(expected);
        });
});
