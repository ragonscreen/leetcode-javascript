import { describe, expect, test } from 'bun:test';

import { isAdjacentDiffAtMostTwo } from './3931_check-adjacent-digit-differences.js';

const testcases = [
        { s: '132', expected: true },
        { s: '129', expected: false },
];

describe('isAdjacentDiffAtMostTwo', () => {
        test.each(structuredClone(testcases))(
                'isAdjacentDiffAtMostTwo($s) -> $expected',
                ({ s, expected }) => {
                        expect(isAdjacentDiffAtMostTwo(s)).toStrictEqual(expected);
                },
        );
});
