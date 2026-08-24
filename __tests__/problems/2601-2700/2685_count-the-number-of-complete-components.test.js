import { describe, expect, test } from 'bun:test';
import {
        countCompleteComponents,
        countCompleteComponents1,
} from '../../../src/problems/2601-2700/2685_count-the-number-of-complete-components.js';

const testcases = [
        {
                n: 6,
                edges: [
                        [0, 1],
                        [0, 2],
                        [1, 2],
                        [3, 4],
                ],
                expected: 3,
        },
        {
                n: 6,
                edges: [
                        [0, 1],
                        [0, 2],
                        [1, 2],
                        [3, 4],
                        [3, 5],
                ],
                expected: 1,
        },
];

describe('countCompleteComponents', () => {
        test.each(
                structuredClone(testcases),
        )('countCompleteComponents($n, $edges) -> $expected', ({
                n,
                edges,
                expected,
        }) => {
                expect(countCompleteComponents(n, edges)).toStrictEqual(
                        expected,
                );
        });
});

describe('countCompleteComponents1', () => {
        test.each(
                structuredClone(testcases),
        )('countCompleteComponents1($n, $edges) -> $expected', ({
                n,
                edges,
                expected,
        }) => {
                expect(countCompleteComponents1(n, edges)).toStrictEqual(
                        expected,
                );
        });
});
