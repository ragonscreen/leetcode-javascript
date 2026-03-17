import { describe, expect, test } from 'bun:test';
import { simplifyPath } from '../../../src/problems/0001-0100/0071_simplify-path.js';

const testcases = [
        { path: '/home/', expected: '/home' },
        { path: '/home//foo/', expected: '/home/foo' },
        {
                path: '/home/user/Documents/../Pictures',
                expected: '/home/user/Pictures',
        },
        { path: '/../', expected: '/' },
        { path: '/.../a/../b/c/../d/./', expected: '/.../b/d' },
        { path: '/home/user/Documents/../P', expected: '/home/user/P' },
        { path: '/../../', expected: '/' },
        { path: '/././', expected: '/' },
];

describe('simplifyPath', () => {
        test.each(
                structuredClone(testcases),
        )('simplifyPath($path) -> $expected', ({ path, expected }) => {
                expect(simplifyPath(path)).toStrictEqual(expected);
        });
});
