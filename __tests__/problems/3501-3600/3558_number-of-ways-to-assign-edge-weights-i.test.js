import { describe, expect, test } from 'bun:test';
import { assignEdgeWeights } from '../../../src/problems/3501-3600/3558_number-of-ways-to-assign-edge-weights-i.js';

const testcases = [
        { edges: [[1, 2]], expected: 1 },
        {
                edges: [
                        [1, 2],
                        [1, 3],
                        [3, 4],
                        [3, 5],
                ],
                expected: 2,
        },
];

describe('assignEdgeWeights', () => {
        test.each(
                structuredClone(testcases),
        )('assignEdgeWeights($edges) -> $expected', ({ edges, expected }) => {
                expect(assignEdgeWeights(edges)).toStrictEqual(expected);
        });
});
