import { describe, expect, test } from 'bun:test';

import { prevPermOpt1 } from './1053_previous-permutation-with-one-swap.js';

const testcases = [
        { arr: [3, 2, 1], expected: [3, 1, 2] },
        { arr: [1, 1, 5], expected: [1, 1, 5] },
        { arr: [1, 9, 4, 6, 7], expected: [1, 7, 4, 6, 9] },
];

describe('prevPermOpt1', () => {
        test.each(structuredClone(testcases))(
                'prevPermOpt1($arr) -> $expected',
                ({ arr, expected }) => {
                        expect(prevPermOpt1(arr)).toStrictEqual(expected);
                },
        );
});
