import { describe, expect, test } from 'bun:test';

import { maxPoints } from './3767_maximize-points-after-choosing-k-tasks.js';

const testcases = [
        { technique1: [5, 2, 10], technique2: [10, 3, 8], k: 2, expected: 22 },
        { technique1: [10, 20, 30], technique2: [5, 15, 25], k: 2, expected: 60 },
        { technique1: [1, 2, 3], technique2: [4, 5, 6], k: 0, expected: 15 },
];

describe('maxPoints', () => {
        test.each(structuredClone(testcases))(
                'maxPoints($technique1, $technique2, $k) -> $expected',
                ({ technique1, technique2, k, expected }) => {
                        expect(maxPoints(technique1, technique2, k)).toStrictEqual(expected);
                },
        );
});
