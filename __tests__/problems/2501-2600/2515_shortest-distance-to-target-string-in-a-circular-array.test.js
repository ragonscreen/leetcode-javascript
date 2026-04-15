import { describe, expect, test } from 'bun:test';
import { closestTarget } from '../../../src/problems/2501-2600/2515_shortest-distance-to-target-string-in-a-circular-array.js';

const testcases = [
        {
                words: ['hello', 'i', 'am', 'leetcode', 'hello'],
                target: 'hello',
                startIndex: 1,
                expected: 1,
        },
        {
                words: ['a', 'b', 'leetcode'],
                target: 'leetcode',
                startIndex: 0,
                expected: 1,
        },
        {
                words: ['i', 'eat', 'leetcode'],
                target: 'ate',
                startIndex: 0,
                expected: -1,
        },
        {
                words: [
                        'hsdqinnoha',
                        'mqhskgeqzr',
                        'zemkwvqrww',
                        'zemkwvqrww',
                        'daljcrktje',
                        'fghofclnwp',
                        'djwdworyka',
                        'cxfpybanhd',
                        'fghofclnwp',
                        'fghofclnwp',
                ],
                target: 'zemkwvqrww',
                startIndex: 8,
                expected: 4,
        },
];

describe('closestTarget', () => {
        test.each(
                structuredClone(testcases),
        )('closestTarget($words, $target, $startIndex) -> $expected', ({
                words,
                target,
                startIndex,
                expected,
        }) => {
                expect(closestTarget(words, target, startIndex)).toStrictEqual(
                        expected,
                );
        });
});
