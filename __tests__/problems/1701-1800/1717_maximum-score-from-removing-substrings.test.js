import { describe, expect, test } from 'bun:test';
import { maximumGain } from '../../../src/problems/1701-1800/1717_maximum-score-from-removing-substrings.js';

const testcases = [
        { s: 'cdbcbbaaabab', x: 4, y: 5, expected: 19 },
        { s: 'aabbaaxybbaabb', x: 5, y: 4, expected: 20 },
];

describe('maximumGain', () => {
        test.each(
                structuredClone(testcases),
        )('maximumGain($s, $x, $y) -> $expected', ({ s, x, y, expected }) => {
                expect(maximumGain(s, x, y)).toStrictEqual(expected);
        });
});
