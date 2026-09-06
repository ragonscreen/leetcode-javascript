import { describe, expect, test } from 'bun:test';

import { numDistinct } from '../../../src/problems/0101-0200/0115_distinct-subsequences.js';

const testcases = [
        { s: 'rabbbit', t: 'rabbit', expected: 3 },
        { s: 'babgbag', t: 'bag', expected: 5 },
];

describe('numDistinct', () => {
        test.each(structuredClone(testcases))(
                'numDistinct($s, $t) -> $expected',
                ({ s, t, expected }) => {
                        expect(numDistinct(s, t)).toStrictEqual(expected);
                },
        );
});
