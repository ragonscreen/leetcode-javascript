import { describe, expect, test } from 'bun:test';
import { openLock } from '../../../src/problems/0701-0800/0752_open-the-lock.js';

const testcases = [
        {
                deadends: ['0201', '0101', '0102', '1212', '2002'],
                target: '0202',
                expected: 6,
        },
        { deadends: ['8888'], target: '0009', expected: 1 },
        {
                deadends: [
                        '8887',
                        '8889',
                        '8878',
                        '8898',
                        '8788',
                        '8988',
                        '7888',
                        '9888',
                ],
                target: '8888',
                expected: -1,
        },
        {
                deadends: ['0000'],
                target: '8888',
                expected: -1,
        },
];

describe('openLock', () => {
        test.each(
                structuredClone(testcases),
        )('openLock($deadends, $target) -> $expected', ({
                deadends,
                target,
                expected,
        }) => {
                expect(openLock(deadends, target)).toStrictEqual(expected);
        });
});
