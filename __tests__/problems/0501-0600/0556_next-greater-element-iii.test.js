import { describe, expect, test } from 'bun:test';

import { nextGreaterElement } from '../../../src/problems/0501-0600/0556_next-greater-element-iii.js';

const testcases = [
        { n: 12, expected: 21 },
        { n: 21, expected: -1 },
        { n: 23_471, expected: 23_714 },
        { n: 2_147_483_647, expected: -1 },
];

describe('nextGreaterElement', () => {
        test.each(structuredClone(testcases))(
                'nextGreaterElement($n) -> $expected',
                ({ n, expected }) => {
                        expect(nextGreaterElement(n)).toStrictEqual(expected);
                },
        );
});
