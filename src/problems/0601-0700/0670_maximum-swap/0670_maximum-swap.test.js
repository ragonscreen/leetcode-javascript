import { describe, expect, test } from 'bun:test';

import { maximumSwap } from './0670_maximum-swap.js';

const testcases = [
        { num: 2736, expected: 7236 },
        { num: 9973, expected: 9973 },
];

describe('maximumSwap', () => {
        test.each(structuredClone(testcases))(
                'maximumSwap($num) -> $expected',
                ({ num, expected }) => {
                        expect(maximumSwap(num)).toStrictEqual(expected);
                },
        );
});
