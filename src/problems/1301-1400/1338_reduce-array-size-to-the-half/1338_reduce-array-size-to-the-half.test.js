import { describe, expect, test } from 'bun:test';

import { minSetSize } from './1338_reduce-array-size-to-the-half.js';

const testcases = [
        { arr: [3, 3, 3, 3, 5, 5, 5, 2, 2, 7], expected: 2 },
        { arr: [7, 7, 7, 7, 7, 7], expected: 1 },
        { arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], expected: 5 },
];

describe('minSetSize', () => {
        test.each(structuredClone(testcases))(
                'minSetSize($arr) -> $expected',
                ({ arr, expected }) => {
                        expect(minSetSize(arr)).toStrictEqual(expected);
                },
        );
});
