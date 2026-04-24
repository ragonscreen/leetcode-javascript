import { describe, expect, test } from 'bun:test';
import { minimumSteps } from '../../../src/problems/2901-3000/2938_separate-black-and-white-balls.js';

const testcases = [
        { s: '101', expected: 1 },
        { s: '100', expected: 2 },
        { s: '0111', expected: 0 },
];

describe('minimumSteps', () => {
        test.each(
                structuredClone(testcases),
        )('minimumSteps($s) -> $expected', ({ s, expected }) => {
                expect(minimumSteps(s)).toStrictEqual(expected);
        });
});
