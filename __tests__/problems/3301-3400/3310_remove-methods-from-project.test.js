import { describe, expect, test } from 'bun:test';

import { remainingMethods } from '../../../src/problems/3301-3400/3310_remove-methods-from-project.js';

const testcases = [
        {
                n: 4,
                k: 1,
                invocations: [
                        [1, 2],
                        [0, 1],
                        [3, 2],
                ],
                expected: [0, 1, 2, 3],
        },
        {
                n: 5,
                k: 0,
                invocations: [
                        [1, 2],
                        [0, 2],
                        [0, 1],
                        [3, 4],
                ],
                expected: [3, 4],
        },
        {
                n: 3,
                k: 2,
                invocations: [
                        [1, 2],
                        [0, 1],
                        [2, 0],
                ],
                expected: [],
        },
        {
                n: 3,
                k: 0,
                invocations: [[2, 0]],
                expected: [0, 1, 2],
        },
        {
                n: 3,
                k: 1,
                invocations: [
                        [0, 1],
                        [0, 2],
                        [2, 1],
                        [1, 0],
                ],
                expected: [],
        },
        {
                n: 1,
                k: 0,
                invocations: [],
                expected: [],
        },
];

describe('remainingMethods', () => {
        test.each(structuredClone(testcases))(
                'remainingMethods($n, $k, $invocations) -> $expected',
                ({ n, k, invocations, expected }) => {
                        const received = Array.from(remainingMethods(n, k, invocations));

                        if (expected.length) {
                                expect(received).toContainAllValues(expected);
                        } else {
                                expect(received).toStrictEqual(expected);
                        }
                },
        );
});
