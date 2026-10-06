import { describe, expect, test } from 'bun:test';

import { findGoodIntegers } from './3890_integers-with-multiple-sum-of-two-cubes.js';

const testcases = [
        { n: 4104, expected: [1729, 4104] },
        { n: 578, expected: [] },
        { n: 20_607, expected: [1729, 4104, 13_832] },
];

describe('findGoodIntegers', () => {
        test.each(structuredClone(testcases))(
                'findGoodIntegers($n) -> $expected',
                ({ n, expected }) => {
                        expect(findGoodIntegers(n)).toStrictEqual(expected);
                },
        );
});
