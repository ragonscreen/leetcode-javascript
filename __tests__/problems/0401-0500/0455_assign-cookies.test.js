import { describe, expect, test } from 'bun:test';
import { findContentChildren } from '../../../src/problems/0401-0500/0455_assign-cookies.js';

const testcases = [
        { g: [1, 2, 3], s: [1, 1], expected: 1 },
        { g: [1, 2], s: [1, 2, 3], expected: 2 },
];

describe('findContentChildren', () => {
        test.each(
                structuredClone(testcases),
        )('findContentChildren($g, $s) -> $expected', ({ g, s, expected }) => {
                expect(findContentChildren(g, s)).toStrictEqual(expected);
        });
});
