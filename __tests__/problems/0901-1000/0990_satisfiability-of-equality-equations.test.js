import { describe, expect, test } from 'bun:test';
import { equationsPossible } from '../../../src/problems/0901-1000/0990_satisfiability-of-equality-equations.js';

const testcases = [
        { equations: ['a==b', 'b!=a'], expected: false },
        { equations: ['b==a', 'a==b'], expected: true },
        { equations: ['a==b', 'b==c', 'a==c'], expected: true },
        { equations: ['a!=a'], expected: false },
        { equations: ['c==c', 'f!=a', 'f==b', 'b==c'], expected: true },
        { equations: ['e==e', 'd!=e', 'c==d', 'd!=e'], expected: true },
        { equations: ['a==b', 'b!=c', 'c==a'], expected: false },
        { equations: ['a==b', 'e==c', 'b==c', 'a!=e'], expected: false },
        { equations: ['a==b', 'c==b', 'd==b', 'x==y'], expected: true },
        { equations: ['c==c', 'b==d', 'x!=z'], expected: true },
];

describe('equationsPossible', () => {
        test.each(
                structuredClone(testcases),
        )('equationsPossible($equations) -> $expected', ({
                equations,
                expected,
        }) => {
                expect(equationsPossible(equations)).toStrictEqual(expected);
        });
});
