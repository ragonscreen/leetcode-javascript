import { describe, expect, test } from 'bun:test';
import { printVertically } from '../../../src/problems/1301-1400/1324_print-words-vertically.js';

const testcases = [
        { s: 'HOW ARE YOU', expected: ['HAY', 'ORO', 'WEU'] },
        { s: 'TO BE OR NOT TO BE', expected: ['TBONTB', 'OEROOE', '   T'] },
        {
                s: 'CONTEST IS COMING',
                expected: ['CIC', 'OSO', 'N M', 'T I', 'E N', 'S G', 'T'],
        },
        {
                s: 'AA BBB C DDDD EEEEE F',
                expected: ['ABCDEF', 'AB DE', ' B DE', '   DE', '    E'],
        },
];

describe('printVertically', () => {
        test.each(
                structuredClone(testcases),
        )('printVertically($s) -> $expected', ({ s, expected }) => {
                expect(printVertically(s)).toStrictEqual(expected);
        });
});
