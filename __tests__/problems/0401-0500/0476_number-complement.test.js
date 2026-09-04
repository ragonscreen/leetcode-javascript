import { describe, expect, test } from 'bun:test';

import { findComplement } from '../../../src/problems/0401-0500/0476_number-complement.js';

const testcases = [
        { num: 5, expected: 2 },
        { num: 1, expected: 0 },
];

describe('findComplement', () => {
        test.each(structuredClone(testcases))(
                'findComplement($num) -> $expected',
                ({ num, expected }) => {
                        expect(findComplement(num)).toStrictEqual(expected);
                },
        );
});
