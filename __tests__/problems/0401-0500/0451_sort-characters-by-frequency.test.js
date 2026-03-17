import { describe, expect, test } from 'bun:test';
import { frequencySort } from '../../../src/problems/0401-0500/0451_sort-characters-by-frequency.js';

const testcases = [
        { s: 'tree', expected: ['eert', 'eetr'] },
        { s: 'cccaaa', expected: ['aaaccc', 'cccaaa'] },
        { s: 'Aabb', expected: ['bbAa', 'bbaA'] },
        {
                s: '2a554442f544asfasssffffasss',
                expected: ['sssssssffffff44444aaaa55522'],
        },
];

describe('frequencySort', () => {
        test.each(
                structuredClone(testcases),
        )('frequencySort($s) -> $expected', ({ s, expected }) => {
                expect(frequencySort(s)).toBeOneOf(expected);
        });
});
