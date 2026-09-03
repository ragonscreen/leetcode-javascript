import { describe, expect, test } from 'bun:test';

import { maxActiveSectionsAfterTrade } from '../../../src/problems/3401-3500/3499_maximize-active-section-with-trade-i.js';

const testcases = [
        { s: '01', expected: 1 },
        { s: '0100', expected: 4 },
        { s: '1000100', expected: 7 },
        { s: '01010', expected: 4 },
        { s: '1110111', expected: 6 },
        { s: '1111111', expected: 7 },
        { s: '01110111111', expected: 11 },
        { s: '00100111011', expected: 10 },
];

describe('maxActiveSectionsAfterTrade', () => {
        test.each(structuredClone(testcases))(
                'maxActiveSectionsAfterTrade($s) -> $expected',
                ({ s, expected }) => {
                        expect(maxActiveSectionsAfterTrade(s)).toStrictEqual(expected);
                },
        );
});
