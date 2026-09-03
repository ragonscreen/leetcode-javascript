import { describe, expect, test } from 'bun:test';

import { resultArray } from '../../../src/problems/3001-3100/3069_distribute-elements-into-two-arrays-i.js';

const testcases = [
        { nums: [2, 1, 3], expected: [2, 3, 1] },
        { nums: [5, 4, 3, 8], expected: [5, 3, 4, 8] },
];

describe('resultArray', () => {
        test.each(structuredClone(testcases))(
                'resultArray($nums) -> $expected',
                ({ nums, expected }) => {
                        expect(resultArray(nums)).toStrictEqual(expected);
                },
        );
});
